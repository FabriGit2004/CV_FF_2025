import { Container, Divider } from '@mui/material';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Header />
      <Divider />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Certificates/>
      <Contact />
    </Container>
  );
}

export default App;
