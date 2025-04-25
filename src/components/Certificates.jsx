import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Modal, IconButton } from '@mui/material';


const certificates = [
  { title: 'CIBERSEGURIDAD', image: '/certs/ciberseguridad.png' },
  { title: 'HTML', image: '/certs/html.png' },
  { title: 'INGLES', image: '/certs/inglesempresarial.png' },
  { title: 'INGLES T.', image: '/certs/inglesTecnico.png' },
  { title: 'INGLES U.', image: '/certs/inglesucp.png' },
  { title: 'MANTENIMIENTO PCS', image: '/certs/mantenimientodepc.png' },
  { title: 'OFIMATICA', image: '/certs/ofimatica.png' },
  { title: 'PL/SQL', image: '/certs/PL.png' },
  { title: 'PORTUGUES', image: '/certs/portugues.png' },
  { title: 'PSEUDOCODIGO', image: '/certs/pseudocodigo.png' },
  { title: 'PYTHON', image: '/certs/pythonsnpp.png' },
  { title: 'PYTHON AV.', image: '/certs/pythonudemy.png' },
  

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
    <Box sx={{ my: 4 }}>
    <Typography variant="h5" gutterBottom>Certificados</Typography>

    {/* Contenedor para los certificados usando Box */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Esto permite que los elementos se ajusten a nuevas filas
        gap: 2, // Espacio entre los elementos
      }}
    >
      {certificates.map((cert, index) => (
        <Box key={index} sx={{ width: { xs: '100%', sm: '48%', md: '30%' } }}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={cert.image}
              alt={cert.title}
              onClick={() => handleOpen(cert.image)} // Abrir el modal al hacer clic en la imagen
              sx={{ cursor: 'pointer' }}
            />
            <CardContent>
              <Typography variant="h6">{cert.title}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>

      {/* Modal para la imagen ampliada */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'relative', backgroundColor: 'white', padding: 2 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
       
          </IconButton>
          <img src={selectedImage} alt="Certificado Ampliado" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
