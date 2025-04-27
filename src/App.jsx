import { Container, Divider } from "@mui/material";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  const pad = 1.5;


  return (
    <Container maxWidth="md" sx={{ py: 2, "& > *": { mt: pad, mb: pad } }}>
      <Header />
      <Divider />
      <Experience />
      <Education />
      <Contact />
      <Certificates />
      {/* <CodeShowcase/> */}
      {/* <Skills /> */}
    </Container>
  );
}

export default App;
