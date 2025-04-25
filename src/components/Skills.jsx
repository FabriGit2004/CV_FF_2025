import { Box, Typography, Grid, Chip } from '@mui/material';

const Skills = () => {
  const skills = ['React', 'Python', 'Django', 'HTML', 'CSS', 'SQL', 'Git'];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5">Skills</Typography>
      <Grid container spacing={1} mt={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
