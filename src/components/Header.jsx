import { Box, Typography } from '@mui/material'

const Header = ({ name, title }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h3">{name}</Typography>
    <Typography variant="h6" color="text.secondary" sx={{ color: '#e6f3ff' }}>
      {title}
    </Typography>
  </Box>
)

export default Header
