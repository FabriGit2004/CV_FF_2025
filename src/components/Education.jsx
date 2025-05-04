import { Box, Typography, Paper, Divider } from "@mui/material";

const Education = ({ cardTitle, title, institution, years }) => (
  <Box>
    <Paper sx={{ p: 2, mt: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {cardTitle}
      </Typography>
      <Divider />
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">
          {institution} · {years}
        </Typography>
      </Box>
    </Paper>
  </Box>
);

export default Education;
