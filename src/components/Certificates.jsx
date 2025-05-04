import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Modal,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";

const certificates = [
  { title: "CIBERSEGURIDAD", image: "/certs/ciberseguridad.png" },
  { title: "HTML", image: "/certs/html.png" },
  { title: "INGLES", image: "/certs/inglesempresarial.png" },
  { title: "INGLES T.", image: "/certs/inglesTecnico.png" },
  { title: "INGLES U.", image: "/certs/inglesucp.png" },
  { title: "MANTENIMIENTO", image: "/certs/mantenimientodepc.png" },
  { title: "OFIMATICA", image: "/certs/ofimatica.png" },
  { title: "PL/SQL", image: "/certs/PL.png" },
  { title: "PORTUGUES", image: "/certs/portugues.png" },
  { title: "PSEUDOCODIGO", image: "/certs/pseudocodigo.png" },
  { title: "PYTHON", image: "/certs/pythonsnpp.png" },
  { title: "PYTHON AV.", image: "/certs/pythonudemy.png" },
  { title: "ANTISOBORNO.", image: "/certs/itti_certs/antisoborno.png" },
  { title: "DEVELOPERS.", image: "/certs/itti_certs/developers.png" },
  { title: "ETICA.", image: "/certs/itti_certs/etica.png" },
  { title: "LAVADO.", image: "/certs/itti_certs/lavado.png" },
  { title: "PRIMEROSAUXILIOS.", image: "/certs/itti_certs/primerosAuxilios.png" },
  { title: "SEGURIDAD.", image: "/certs/itti_certs/seguridad.png" },
];

const Certificates = ({cardTitle}) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box>
      <Paper sx={{ p: 2, mt: 2,  boxShadow: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          {cardTitle}
        </Typography>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
            mb: 2
          }}
        >
          {certificates.map((cert, index) => (
            <Box
              key={index}
              sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={cert.image}
                  alt={cert.title}
                  onClick={() => handleOpen(cert.image)}
                  sx={{ cursor: "pointer" }}
                />
              </Card>
            </Box>
          ))}
        </Box>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "white",
            padding: 2,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#eee",
              "&:hover": { backgroundColor: "#ccc" },
            }}
          >
            ✕
          </IconButton>
          <img
            src={selectedImage}
            alt="Certificado Ampliado"
            style={{ maxWidth: "90vw", maxHeight: "80vh" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
