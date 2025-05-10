import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";

const certificatesSP = [
  { title: "Ciberseguridad", image: "/certs/ciberseguridad.png" },
  { title: "HTML", image: "/certs/html.png" },
  { title: "Inglés Empresarial", image: "/certs/inglesempresarial.png" },
  { title: "Inglés Técnico", image: "/certs/inglesTecnico.png" },
  { title: "Inglés UCP", image: "/certs/inglesucp.png" },
  { title: "Mantenimiento de PC", image: "/certs/mantenimientodepc.png" },
  { title: "Ofimática", image: "/certs/ofimatica.png" },
  { title: "PL/SQL", image: "/certs/PL.png" },
  { title: "Portugués", image: "/certs/portugues.png" },
  { title: "Pseudocódigo", image: "/certs/pseudocodigo.png" },
  { title: "Python SNPP", image: "/certs/pythonsnpp.png" },
  { title: "Python Avanzado (Udemy)", image: "/certs/pythonudemy.png" },
  { title: "Antisoborno", image: "/certs/itti_certs/antisoborno.png" },
  { title: "Developers ITTI", image: "/certs/itti_certs/developers.png" },
  { title: "Ética Profesional", image: "/certs/itti_certs/etica.png" },
  { title: "Antilavado de Activos", image: "/certs/itti_certs/lavado.png" },
  {
    title: "Primeros Auxilios",
    image: "/certs/itti_certs/primerosAuxilios.png",
  },
  { title: "Seguridad Laboral", image: "/certs/itti_certs/seguridad.png" },
];


const certificatesEN = [
  { title: "Cybersecurity Essentials", image: "/certs/ciberseguridad.png" },
  { title: "HTML Foundations", image: "/certs/html.png" },
  { title: "Business English", image: "/certs/inglesempresarial.png" },
  { title: "Technical English", image: "/certs/inglesTecnico.png" },
  { title: "English Language - UCP", image: "/certs/inglesucp.png" },
  { title: "PC Maintenance & Repair", image: "/certs/mantenimientodepc.png" },
  { title: "Office Software Skills", image: "/certs/ofimatica.png" },
  { title: "PL/SQL Programming", image: "/certs/PL.png" },
  { title: "Portuguese", image: "/certs/portugues.png" },
  { title: "Pseudocode", image: "/certs/pseudocodigo.png" },
  { title: "Python Basics – SNPP", image: "/certs/pythonsnpp.png" },
  { title: "Advanced Python (Udemy)", image: "/certs/pythonudemy.png" },
  { title: "Anti-Bribery Compliance", image: "/certs/itti_certs/antisoborno.png" },
  { title: "ITTI Developers", image: "/certs/itti_certs/developers.png" },
  { title: "Professional Ethics", image: "/certs/itti_certs/etica.png" },
  { title: "Money Laundering Awareness", image: "/certs/itti_certs/lavado.png" },
  {
    title: "First Aid & Emergency Response",
    image: "/certs/itti_certs/primerosAuxilios.png",
  },
  { title: "Workplace Safety & Security", image: "/certs/itti_certs/seguridad.png" },
];







const Certificates = ({ cardTitle, eng }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const certificates = eng ? certificatesEN : certificatesSP;


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
      <Paper sx={{ p: 2, mt: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          {cardTitle}
        </Typography>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            mt: 2,
            mb: 2,
          }}
        >
          {certificates.map((cert, index) => (
            <Box
              key={index}
              sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
            >
              <Card
                sx={{
                  border: "1px solid #e0e0e0",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  onClick={() => handleOpen(cert.image)}
                  sx={{
                    cursor: "pointer",
                    height: 200,
                    width: "100%",
                    objectFit: "contain",
                    backgroundColor: "#fafafa",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {cert.title}
                  </Typography>
                </CardContent>
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
