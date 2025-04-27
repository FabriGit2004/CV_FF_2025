import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => (
  <Box sx={{backgroundColor: 'white'}}>
    <Box
      sx={{
        padding: "16px",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Contacto
      </Typography>
      <Divider />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          color="primary"
          component="a"
          href="mailto:fatechafabrizio@gmail.com"
        >
          <EmailIcon />
        </IconButton>
        <Typography>
          <Link
            href="mailto:fatechafabrizio@gmail.com"
            sx={{ textDecoration: "none", color: "#1976d2" }}
          >
            fatechafabrizio@gmail.com
          </Link>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/FabriGit2004"
        >
          <GitHubIcon />
        </IconButton>
        <Typography>
          <Link
            href="https://github.com/FabriGit2004"
            sx={{ textDecoration: "none", color: "#1976d2" }}
          >
            github.com/FabriGit2004
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Contact;
