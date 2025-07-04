import {
  Container,
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "var(--light-grey)", mt: 4, py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={5}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Typography variant="h6" sx={{ color: "var(--earth-brown)", mb: 1 }}>
              Zaph Tours
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                color: "var(--dark)",
                mb: 2,
                maxWidth: 250,
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://github.com/JohnMwihaki"
                target="_blank"
                aria-label="GitHub"
                sx={{ color: "var(--earth-brown)" }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/john-mwihaki-b8a11b267/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: "var(--earth-brown)" }}
              >
              <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/JohnMwihaki"
                target="_blank"
                aria-label="Twitter"
                sx={{ color: "var(--earth-brown)" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/JohnMwihaki"
                target="_blank"
                aria-label="Facebook"
                sx={{ color: "var(--earth-brown)" }}
              >
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "var(--dark)", fontWeight: 600, mb: 1 }}
            >
              Explore Us
            </Typography>
            <Stack spacing={0.5}>
              <Button component="a" href="/about" size="small" sx={{ color: "var(--dark)" }}>
                About Us
              </Button>
              <Button component="a" href="/destinations" size="small" sx={{ color: "var(--dark)" }}>
                Destinations
              </Button>
              <Button component="a" href="/blog" size="small" sx={{ color: "var(--dark)" }}>
                Blogs & News
              </Button>
              <Button component="a" href="/features" size="small" sx={{ color: "var(--dark)" }}>
                Features
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "var(--dark)", fontWeight: 600, mb: 1 }}
            >
              Support
            </Typography>
            <Stack spacing={0.5}>
              <Button component="a" href="/account" size="small" sx={{ color: "var(--dark)" }}>
                Account
              </Button>
              <Button component="a" href="/feedback" size="small" sx={{ color: "var(--dark)" }}>
                Feedback
              </Button>
              <Button component="a" href="/support" size="small" sx={{ color: "var(--dark)" }}>
                Support Center
              </Button>
              <Button component="a" href="/stores" size="small" sx={{ color: "var(--dark)" }}>
                Our Stores
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "var(--dark)", fontWeight: 600, mb: 1 }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontSize: "0.9rem", color: "var(--earth-brown)" }}
            >
              Questions or feedback? We’d love to hear from you.
            </Typography>
            <Button
              component="a"
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: "var(--safari-orange)",
                color: "var(--smoke-white)",
                "&:hover": {
                  backgroundColor: "var(--amber)",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Contact Us
            </Button>
          </Box>
        </Stack>

        <Divider sx={{ my: 4, backgroundColor: "var(--stone-grey)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "var(--earth-brown)" }}>
            <CopyrightIcon fontSize="small" sx={{ verticalAlign: "middle" }} />{" "}
            2025: Zaph Tours. Built with{" "}
            <FavoriteIcon fontSize="small" sx={{ color: "red", verticalAlign: "middle" }} /> by John Mwihaki.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
