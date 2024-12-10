import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

function Hero() {
  return (
    <Box
      sx={{
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(-45deg, #1a237e, #0097a7, #006064, #1a237e)',
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 3,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Engineering Leadership Team
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          }}
        >
          Shaping the Future of AI-Driven Development
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
