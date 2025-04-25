import { Box, Typography, Paper } from '@mui/material';

const Education = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h5">Educación</Typography>
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Ingeniería en Software</Typography>
      <Typography color="text.secondary">Universidad Técnica · 2022 - Actualidad</Typography>
    </Paper>
  </Box>
);

export default Education;
