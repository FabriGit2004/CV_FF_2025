import { Box, Typography, Paper } from '@mui/material';

const Experience = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h5">Experiencia</Typography>
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Call Center XYZ</Typography>
      <Typography color="text.secondary">Agente de soporte · 2024 - Presente</Typography>
      <Typography>
        Atención al cliente en inglés y español, resolución de problemas técnicos y administrativos.
      </Typography>
    </Paper>
  </Box>
);

export default Experience;
