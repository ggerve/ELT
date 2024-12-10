import { Container, Typography, Box, Paper } from '@mui/material';

function Vision() {
  return (
    <Box
      id="vision"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, rgba(38,38,38,1) 0%, rgba(26,26,26,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Our Vision
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
              zIndex: 0,
            },
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
              position: 'relative',
              zIndex: 1,
            }}
          >
            We're pioneering the next generation of AI-driven development tools, making software engineering more intuitive,
            efficient, and powerful than ever before. Our mission is to empower developers with intelligent assistants that
            understand context, anticipate needs, and deliver solutions that push the boundaries of what's possible.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Vision;
