import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
];

const Certificates = () => {
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
      <Accordion sx={{  mt: 2,  boxShadow: 3, borderRadius: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
            Certificados
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {/* Contenedor para los certificados */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {certificates.map((cert, index) => (
              <Box
                key={index}
                sx={{ width: { xs: "100%", sm: "48%", md: "30%" }, m: 1 }}
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
                  <CardContent>
                    <Typography variant="h6">{cert.title}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Modal para la imagen ampliada */}
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
          sx={{ position: "relative", backgroundColor: "white", padding: 2 }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            X
          </IconButton>
          <img
            src={selectedImage}
            alt="Certificado Ampliado"
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
