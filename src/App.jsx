import { useState } from "react";
import {
  Box,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,

} from "@mui/material";

import React from 'react';
import HubIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";

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
          sx={{ color: "white", fontSize: 50, cursor: "pointer", mt: 2, mb : 4 }}
        />
      </Box>

      <NetworkTools />


      
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
