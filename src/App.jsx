import { useState } from "react";
import {
  Container,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

import { contentEs, contentEn } from "./content";

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

function App() {
  const [lang, setLang] = useState(null); // null => no seleccionado aún
  const pad = 1.5;

  const content = lang === "es" ? contentEs : contentEn;

  if (!lang) {
    return <LanguageSelector onSelect={setLang} />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh", ml: 16 }}>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Container maxWidth="md" sx={{ "& > *": { mt: pad, mb: pad } }}>
          <Header {...content.header} />
          <Experience {...content.experience} />
          <Education {...content.education} />
          <Contact {...content.contact} />
          <Certificates cardTitle={content.certificates.cardTitle} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
