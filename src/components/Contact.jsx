import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = ({ cardTitle, email, github }) => (
  <Box sx={{ backgroundColor: 'white' }}>
    <Box
      sx={{
        padding: "16px",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
        {cardTitle}
      </Typography>
      <Divider />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton color="primary" component="a" href={`mailto:${email}`}>
          <EmailIcon />
        </IconButton>
        <Typography>
          <Link
            href={`mailto:${email}`}
            sx={{ textDecoration: "none", color: "#1976d2" }}
          >
            {email}
          </Link>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton color="primary" component="a" href={github}>
          <GitHubIcon />
        </IconButton>
        <Typography>
          <Link
            href={github}
            sx={{ textDecoration: "none", color: "#1976d2" }}
          >
            {github.replace("https://", "")}
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Contact;
