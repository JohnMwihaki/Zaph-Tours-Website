import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PlaceIcon from "@mui/icons-material/Place";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main",
        p: 1,
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
      }}
    >
    <Box
        sx={{
          p: 0.5,
          borderRadius: 2,
          backgroundColor: "var(--soft-sand)",
          mx: 3,
          maxWidth: "xl",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
           
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "var(--smoke-white)",
              fontFamily: "var(--secondary-font)",
              backgroundColor: "var(--safari-orange)",
              borderRadius: 2,
              p: 0.8,
            }}
          >
            Zaph Tours
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
            sx={{ flexWrap: "wrap", alignItems: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--deep-green)",
                "&:hover": {
                  backgroundColor: "var(--earth-brown)",
                },
              }}
              component={RouterLink}
              to="/"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--deep-green)",
                "&:hover": {
                  backgroundColor: "var(--earth-brown)",
                },
              }}
              component={RouterLink}
              to="/DestinationPage/"
              startIcon={<PlaceIcon />}
            >
              Destinations
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--deep-green)",
                "&:hover": {
                  backgroundColor: "var(--earth-brown)",
                },
              }}
              component={RouterLink}
              to="/tripTypePage/"
              startIcon={<TravelExploreIcon />}
            >
              Featured Trips
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--deep-green)",
                "&:hover": {
                  backgroundColor: "var(--earth-brown)",
                },
              }}
              component={RouterLink}
              to="/about/"
              startIcon={<MenuBookIcon />}
            >
              Blog
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--deep-green)",
                "&:hover": {
                  backgroundColor: "var(--earth-brown)",
                },
              }}
              component={RouterLink}
              to="/ContactPage/"
              startIcon={<ContactMailIcon />}
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
