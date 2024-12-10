import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(38,38,38,1) 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Connect With Us
        </Typography>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
          }}
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              width: '100%',
              py: 1.5,
              background: 'linear-gradient(45deg, #2196f3 30%, #00bcd4 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976d2 30%, #0097a7 90%)',
              },
            }}
          >
            Send Message
          </Button>
        </Paper>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact;
