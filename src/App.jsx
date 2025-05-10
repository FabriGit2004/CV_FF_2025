import { useState } from "react";
import {
  Box,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
} from "@mui/material";

import HubIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

import { contentEs, contentEn } from "./content";

import NetworkTools from "./components/python/NetworkTools";

function LanguageSelector({ onSelect }) {
  return (
    <Dialog open disableEscapeKeyDown>
      <DialogTitle sx={{ textAlign: "center" }}>
        Choose your language. <br /> Elige tu idioma.
      </DialogTitle>

      <DialogContent>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{ mt: 1, mb: 2 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => onSelect("es")}
          >
            Español
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => onSelect("en")}
          >
            English
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

function SecondaryView({ onBack }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <HomeIcon
          onClick={onBack}
          sx={{ color: "white", fontSize: 70, cursor: "pointer", mt: 3 }}
        />
      </Box>

      <NetworkTools />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <LightbulbIcon
          onClick={handleOpenDialog}
          sx={{
            color: "#fbc02d",
            mt: 1,
            mr: 5,
            fontSize: 40,
            cursor: "pointer",
          }}
        />
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>google.com</DialogTitle>
        <DialogContent>
          <Typography>142.250.190.14/24</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>X</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

function App() {
  const [lang, setLang] = useState(null); // null => no seleccionado aún
  const [secondaryView, setSecondaryView] = useState(false); // para cambiar entre vistas
  const pad = 1.5;

  const content = lang === "es" ? contentEs : contentEn;

  if (!lang) {
    return <LanguageSelector onSelect={setLang} />;
  }

  if (secondaryView) {
    return <SecondaryView onBack={() => setSecondaryView(false)} />;
  }

  return (
    <Container maxWidth="md" sx={{ "& > *": { mt: pad, mb: pad } }}>
      <Header {...content.header} />
      <Experience {...content.experience} />

      <Education {...content.education} />
      <Contact {...content.contact} />

      <Button
        sx={{ width: "100%", height: "80px" }}
        variant="contained"
        onClick={() => setSecondaryView(true)}
        endIcon={<HubIcon scale={"small"} />}
      >
        <Typography sx={{ mr: 2, fontWeight: "bold" }}>
          {content.projects.cardTitle}
        </Typography>
      </Button>

      <Certificates
        cardTitle={content.certificates.cardTitle}
        eng={content.certificates.eng}
      />
    </Container>
  );
}

export default App;
