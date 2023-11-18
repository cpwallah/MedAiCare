
import React, { useState } from 'react';
import TopNav from './TopNav';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import '../styles/contact.css';

function Contact() {
  const [showGoToTopButton, setShowGoToTopButton] = useState(false);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to check scrolling position and show/hide the button
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setShowGoToTopButton(true);
    } else {
      setShowGoToTopButton(false);
    }
  };

  window.addEventListener('scroll', checkScrollPosition);

  return (
    <div>
      <TopNav />
      <section className="wrapper">
        <Typography variant="h4" className="common-heading">
          Feel Free to Contact us
        </Typography>

        

        <Container className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xgedgjkr" method="POST">
              <div className="text-field-wrapper">
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="text-field-wrapper">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="Email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="text-field-wrapper">
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                  name="message"
                  required
                  autoComplete="off"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Send />}
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </Container>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title = "myframe"
        ></iframe>

        {showGoToTopButton && (
          <div className="go-to-top-button" onClick={handleGoToTop}>
            <span>Go to Top</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default Contact;

