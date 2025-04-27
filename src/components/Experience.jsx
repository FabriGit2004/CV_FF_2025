import { Box, Typography, Paper, Chip, Divider } from "@mui/material";

const txt = `Soporte, resolución de problemas técnicos y administrativos.`;
const txt2 = `Desarrollo de Software.`;

const style = { backgroundColor: "#f1502f", color: "white" }

const Experience = () => (
  <Box sx={{ my: 2 }}>
    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Experiencia</Typography>
    <Paper sx={{ p: 3, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}><a href="https://www.itti.digital" style={{ textDecoration: 'none', color: '#2feeaf' }}>ITTI SAECA</a></Typography>
      <Typography color="text.secondary" sx={{ mb: 1 }}>
        Jr. Software Engineer · Oct-2024 - Presente
      </Typography>
   
      <Divider sx={{ mb: 2 }} />

      {/* Descripción */}
      <Typography>{txt}</Typography>
      <Typography>{txt2}</Typography>

      {/* Tecnologías */}
      <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Tecnologías utilizadas:</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, "& > *": {style} }}>
        <Chip label="Nest.js"  />
        <Chip label="React.js"  />
        <Chip label="Git"  />
        <Chip label="GitHub" />
        <Chip label="Postman"  />
        <Chip label="OracleDB"  />
        <Chip label="PL/SQL"  />
        <Chip label="Figma"  />
        <Chip label="Jira"  />
      </Box>

    </Paper>
  </Box>
);

export default Experience;
