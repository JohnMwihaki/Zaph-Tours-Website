import {
  MailOutline,
  Phone,
  GitHub,
  LinkedIn,
  Twitter,
  Facebook,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

 const validate = () => {
  const errors = {
    name: formData.name === "" ? "Name is required" : "",
    email: formData.email.includes("@") && formData.email.includes(".") ? "" : "Invalid email",
    subject: formData.subject === "" ? "Subject is required" : "",
    message: formData.message === "" ? "Message is required" : "",
  };

  setFormErrors(errors);
  return Object.values(errors).every(val => val === "");
};


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    console.log("Submitted Data:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          height: 300,
          backgroundImage: "url('../mt-kenya1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
            fontFamily: "Dancing Script, cursive",
            color: "var(--safari-orange)",
          }}
        >
          Talk With Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 4,
          backgroundColor: "var(--stone-grey)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "2.2rem",
              mb: 3,
              color: "var(--earth-brown)",
              fontFamily: "Dancing Script, cursive",
            }}
          >
            Where Can You Find Us?
          </Typography>

          <Stack spacing={2} mb={3} px={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
              <MailOutline sx={{ color: "var(--deep-green)", fontSize: 24 }} />
              <Typography
                sx={{
                  color: "var(--dark)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  fontFamily: "var(--secondary-font)",
                }}
              >
                zaphtours@yahoo.org
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
              <Phone sx={{ color: "var(--deep-green)", fontSize: 24 }} />
              <Typography
                sx={{
                  color: "var(--dark)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  fontFamily: "var(--secondary-font)",
                }}
              >
                +23470988723
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 2,
                color: "var(--dark)",
                fontSize: "1.1rem",
                fontWeight: 500,
                lineHeight: 1.6,
                textAlign: "left",
                fontFamily: "var(--secondary-font)",
              }}
            >
              Tourism Fund Building, 10th Floor.
              <br />
              P.O Box 30027-00100,
              <br />
              Nairobi, Kenya
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} mt={1} px={2}>
            <IconButton
              href="https://github.com/JohnMwihaki"
              target="_blank"
              sx={{
                color: "var(--deep-green)",
                "&:hover": { color: "var(--safari-orange)" },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/john-mwihaki-b8a11b267/"
              target="_blank"
              sx={{
                color: "var(--deep-green)",
                "&:hover": { color: "var(--safari-orange)" },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/JohnMwihaki"
              target="_blank"
              sx={{
                color: "var(--deep-green)",
                "&:hover": { color: "var(--safari-orange)" },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://github.com/JohnMwihaki"
              target="_blank"
              sx={{
                color: "var(--deep-green)",
                "&:hover": { color: "var(--safari-orange)" },
              }}
            >
              <Facebook />
            </IconButton>
          </Stack>
        </Box>

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 3,
            backgroundColor: "var(--smoke-white)",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, color: "var(--deep-green)" }}
          >
            Send Us a Message
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                error={!!formErrors.name}
                helperText={formErrors.name}
                InputLabelProps={{
                  sx: {
                    color: "var(--stone-grey)",
                    fontWeight: 600,
                  },
                }}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                error={!!formErrors.email}
                helperText={formErrors.email}
                InputLabelProps={{
                  sx: {
                    color: "var(--stone-grey)",
                    fontWeight: 600,
                  },
                }}
              />
              <TextField
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                fullWidth
                error={!!formErrors.subject}
                helperText={formErrors.subject}
                InputLabelProps={{
                  sx: {
                    color: "var(--stone-grey)",
                    fontWeight: 600,
                  },
                }}
              />
              <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                error={!!formErrors.message}
                helperText={formErrors.message}
                InputLabelProps={{
                  sx: {
                    color: "var(--stone-grey)",
                    fontWeight: 600,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "var(--golden-yellow)",
                  "&:hover": {
                    backgroundColor: "var(--safari-orange)",
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "var(--earth-brown)",
          textAlign:'center'
        }}
      >
        Available from 8:00 a.m - 5:00 p.m (Monday - Saturday)
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 2,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36345.59016244639!2d37.134199925210446!3d-0.7220638664565743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang'a!5e0!3m2!1sen!2ske!4v1751560449862!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
}
