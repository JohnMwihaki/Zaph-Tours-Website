import {  Container, Typography, Box } from "@mui/material";
import DestinationCard from "../components/DestinationCard";
import { destinationData } from "../Data/DestianationCardData";

export default function DestinationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          color: "var(--earth-brown)",
          fontFamily: "Dancing script,cursive",
        }}
      >
        <Typography variant="inherit" fontWeight="bold">
          Explore Our Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover the beauty of the world through our top-rated travel
          destinations.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        {destinationData.map((dest, index) => (
          <Box
            sx={{
              flex: { xs: "100%", sm: "48%", md: "32%" },
            }}
            key={index}
          >
            <DestinationCard {...dest} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
