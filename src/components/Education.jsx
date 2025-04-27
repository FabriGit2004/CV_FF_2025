import { Box, Typography, Paper, Divider } from "@mui/material";
const Education = () => (
  <Box>
    <Paper sx={{ p: 2, mt: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Educación
      </Typography>
      <Divider />
      <Box sx={{m:2}}>
        <Typography variant="h6">Ingeniería en Informática</Typography>
        <Typography color="text.secondary">
          Universidad Columbia · 2022 - 2027
        </Typography>
      </Box>
    </Paper>
  </Box>
);

export default Education;
