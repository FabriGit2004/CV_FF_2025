import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TextField,
  CircularProgress,
  Box,
  useMediaQuery,
  Tabs,
  Tab,
  
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Función para validar la IP
const isValidIP = (ip) => {
  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/(3[0-2]|[12]?[0-9]))?$/;
  return regex.test(ip);
};

// Función para validar el CIDR
const isValidCIDR = (cidr) => {
  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/(3[0-2]|[12]?[0-9]))$/;
  return regex.test(cidr);
};

const NetworkTools = () => {
  const [output, setOutput] = useState("");
  const [pyodide, setPyodide] = useState(null);
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [tabIndex, setTabIndex] = useState(0); // Control de la pestaña seleccionada
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loadPyodide = async () => {
      const pyodidePkg = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
      });
      setPyodide(pyodidePkg);
    };

    if (!window.loadPyodide) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
      script.onload = loadPyodide;
      document.body.appendChild(script);
    } else {
      loadPyodide();
    }
  }, []);

  const runCode = async () => {
    if (pyodide && isValid) {
      try {
        let dynamicCode = "";
        
        if (tabIndex === 0) { // Si estamos en la pestaña de Subnet
          dynamicCode = `
import ipaddress

def subnet_info(ip_with_mask):
    net = ipaddress.ip_network(ip_with_mask, strict=False)
    return f"Network: {net.network_address}\\nBroadcast: {net.broadcast_address}\\nHosts: {net.num_addresses - 2}"

result = subnet_info("${input.trim()}")
result
          `;
        } else if (tabIndex === 1) { // Si estamos en la pestaña de CIDR
          dynamicCode = `
import ipaddress

def cidr_info(cidr):
    net = ipaddress.IPv4Network(cidr, strict=False)
    network_address = net.network_address
    broadcast_address = net.broadcast_address
    first_host = list(net.hosts())[0]
    last_host = list(net.hosts())[-1]
    total_ips = net.num_addresses
    return f"Network Address: {network_address}\\nBroadcast Address: {broadcast_address}\\nFirst Host: {first_host}\\nLast Host: {last_host}\\nTotal IPs: {total_ips}"

result = cidr_info("${input.trim()}")
result
          `;
        }

        const result = await pyodide.runPythonAsync(dynamicCode);
        setOutput(result.toString());
      } catch (error) {
        setOutput(error.toString());
      }
    }
  };

  // Manejar el cambio en el TextField y validar la IP o CIDR
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setIsValid(tabIndex === 0 ? isValidIP(value) : isValidCIDR(value)); // Validar según la pestaña
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex); // Cambiar la pestaña seleccionada
    setInput(""); // Limpiar la entrada cuando se cambie la pestaña
    setOutput(""); // Limpiar el resultado
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "0vh",
        mt: 3,
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 3,
          boxShadow: 6,
          p: isMobile ? 1 : 2,
        }}
      >
        <CardHeader
          title="Network Calculators"
          sx={{ textAlign: "center", fontSize: isMobile ? 14 : 18 }}
        />
        
        <CardContent>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{mb : 2}}
          >
            <Tab label="Subnet" />
            <Tab label="CIDR" />
          </Tabs>

          <TextField
            label={tabIndex === 0 ? (!isValid ? "Invalid IP address or subnet" : "Enter IP/Subnet ") : (!isValid ? "Invalid CIDR" : "Enter CIDR")}
            value={input}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size={isMobile ? "small" : "medium"}
            error={!isValid} // Si la IP/CIDR no es válida, mostrar error
            sx={{ mt: 2 }}
          />

          <SyntaxHighlighter
            language="python"
            style={materialDark}
            customStyle={{
              height: "200px",
              marginTop: "20px",
              fontSize: isMobile ? "0.75rem" : "1rem",
              overflowX: "auto",
            }}
          >
            {tabIndex === 0
              ? `
import ipaddress

def subnet_info(ip_with_mask):
    net = ipaddress.ip_network(ip_with_mask, strict=False)
    return f"Network: {net.network_address}\\nBroadcast: {net.broadcast_address}\\nHosts: {net.num_addresses - 2}"

result = subnet_info("${input.trim()}")
result
              `
              : `
import ipaddress

def cidr_info(cidr):
    net = ipaddress.IPv4Network(cidr, strict=False)
    network_address = net.network_address
    broadcast_address = net.broadcast_address
    first_host = list(net.hosts())[0]
    last_host = list(net.hosts())[-1]
    total_ips = net.num_addresses
    return f"Network Address: {network_address}\\nBroadcast Address: {broadcast_address}\\nFirst Host: {first_host}\\nLast Host: {last_host}\\nTotal IPs: {total_ips}"

result = cidr_info("${input.trim()}")
result
              `}
          </SyntaxHighlighter>

          <Button
            variant="contained"
            onClick={runCode}
            disabled={!pyodide || !isValid} // Deshabilitar el botón si la IP/CIDR es inválido
            sx={{ mt: 2, width: "100%" }}
          >
            {pyodide ? "Run Code" : <CircularProgress size={24} />}
          </Button>
          
          {output && (
            <Box
              component="pre"
              sx={{
                mt: 2,
                color: "limegreen",
                whiteSpace: "pre-wrap",
                fontSize: isMobile ? "0.8rem" : "1rem",
              }}
            >
              Output: {output}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default NetworkTools;
