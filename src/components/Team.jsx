import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const teamMembers = [
  {
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    description: 'Pioneer in AI systems architecture with 15+ years of experience in scaling enterprise solutions.',
    image: '/images/leader1.jpg',
  },
  {
    name: 'Marcus Rodriguez',
    position: 'Head of AI Research',
    description: 'Leading breakthrough developments in autonomous systems and machine learning algorithms.',
    image: '/images/leader2.jpg',
  },
  {
    name: 'Emma Watson',
    position: 'VP of Engineering',
    description: 'Expertise in building and scaling high-performance engineering teams and innovative products.',
    image: '/images/leader3.jpg',
  },
];

function Team() {
  const theme = useTheme();

  return (
    <Box
      id="team"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(38,38,38,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 14px 28px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
