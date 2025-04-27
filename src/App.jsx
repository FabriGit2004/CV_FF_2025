import { Container, Divider, Box } from "@mui/material";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  const pad = 2;


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
