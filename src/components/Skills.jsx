import { Box, Grid, Chip } from '@mui/material';

const Skills = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/react.svg', color: '#61dafb' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/python.svg', color: '#306998' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/django.svg', color: '#092e20' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/html5.svg', color: '#e34f26' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/css3.svg', color: '#1572b6' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/mysql.svg', color: '#4479a1' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.0.0/icons/git.svg', color: '#f1502f' }
  ];

  return (
    <Box>
      <Grid container spacing={1} mt={1} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label=""
              icon={<img src={skill.logo} alt={skill.name} style={{ width: 48, height: 48 }} />}
              sx={{
                backgroundColor: "white",
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                '& .MuiChip-icon': { margin: 0 }, // Elimina el espacio extra alrededor del ícono
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
