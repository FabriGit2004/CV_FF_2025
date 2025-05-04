import { Box, Typography, Paper, Chip, Divider } from "@mui/material";

const style = { backgroundColor: "rgb(75, 74, 74)", color: "white" };

const Experience = ({
  cardTitle,
  company,
  companyUrl,
  position,
  techTitle,
  dateRange,
  descriptions,
  technologies
}) => (
  <Box sx={{ my: 2 }}>
    <Paper sx={{ p: 3, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
        {cardTitle}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        <a href={companyUrl} style={{ textDecoration: 'none', color: '#2feeaf' }}>
          {company}
        </a>
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 1 }}>
        {position} · {dateRange}
      </Typography>

      {/* Descripción */}
      <Box sx={{ marginLeft: '24px' }}>
        {descriptions.map((desc, index) => (
          <Typography key={index}><li>{desc}</li></Typography>
        ))}
      </Box>

      {/* Tecnologías */}
      <Typography sx={{ mt: 2, fontWeight: 'bold' }}>{techTitle}</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
        {technologies.map((tech, index) => (
          <Chip key={index} label={tech} sx={style} />
        ))}
      </Box>
    </Paper>
  </Box>
);

export default Experience;
