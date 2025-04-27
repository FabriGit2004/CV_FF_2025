import { Box, Typography, Paper } from '@mui/material';

const Education = () => (
  <Box>
 <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, }}>Educación</Typography>    
 <Paper sx={{ p: 2, mt: 2,  boxShadow: 3 }}>
      <Typography variant="h6">Ingeniería en Informática</Typography>
      <Typography color="text.secondary">Universidad Columbia · 2022 - 2027</Typography>
    </Paper>
  </Box>
);

export default Education;
