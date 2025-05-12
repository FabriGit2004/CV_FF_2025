import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import HubIcon from "@mui/icons-material/Share";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

import { contentEs, contentEn } from "./content";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
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
        alignItems: "center",
        minHeight: "100vh", // ocupa toda la altura
        boxSizing: "border-box",
        padding: "0px",
        touchAction: "none",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <NetworkTools comebackFx={onBack} />
      </Box>
    </Container>
  );
}

function App() {
  const [isLandscape, setIsLandscape] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOrientationChange = () => {
    const isNowLandscape = window.matchMedia(
      "(orientation: landscape)"
    ).matches;
    setIsLandscape(isNowLandscape);
  };

  useEffect(() => {
    handleOrientationChange(); // Initial check
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);



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

  if (isMobile && isLandscape) {
    return (
      <Box
        sx={{
          width: "100",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <ScreenRotationIcon sx={{ fontSize: 80, mb: 2 }} />
      </Box>
    );
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
