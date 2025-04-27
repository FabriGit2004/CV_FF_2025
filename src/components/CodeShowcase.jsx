import { useState } from 'react';
import { Card, CardContent, CardHeader, Button } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeShowcase = () => {
  const codeString = `
function greet(name) {
  return "Hello, " + name + "!";
}

greet("World");
  `;

  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(`(() => { ${codeString}; return greet("World"); })()`);
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <Card sx={{  borderRadius: 3, boxShadow: 4 }}>
      <CardHeader title="JavaScript Greeting Function" />
      <CardContent>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {codeString}
        </SyntaxHighlighter>
        <Button variant="contained" onClick={runCode} sx={{ mt: 2 }}>
          Ejecutar
        </Button>
        {output && (
          <div style={{ marginTop: '16px', color: 'limegreen' }}>
            Output: {output}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeShowcase;
