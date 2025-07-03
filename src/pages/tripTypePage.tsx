import { typesCardData,TripData} from "../Data/TripCardData";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Button,
  Tooltip,
} from "@mui/material";

export default function TripPage() {
  return (
    <>
      <Box sx={{ position: "relative", mb: 6, height: 500, overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.7)
            ), url('../wildlife.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Experience Magical Safaris
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "var(--amber)", fontSize: "2rem", fontWeight: 700 }}>
              Featured
            </Typography>
            <Typography sx={{ color: "var(--safari-orange)", fontSize: "2rem", fontWeight: 700 }}>
              Packages Safaris
            </Typography>
          </Box>

          <Typography variant="subtitle1" maxWidth="600px" mt={2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Your dream adventure starts here.
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {typesCardData.map((data: TripData, idx: number) => (
            <Card
              key={idx}
              sx={{
                width: { xs: "100%", sm: "300px", md: "350px" },
                borderRadius: 2,
                minHeight: 200,
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={data.image}
                alt={data.title}
                sx={{ height: 200, objectFit: "cover" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "var(--smoke-white)",
                  color: "var(--golden-yellow)",
                  paddingX: 1.2,
                  paddingY: 0.5,
                  fontWeight: 700,
                  borderRadius: 1,
                  fontSize: "0.9rem",
                  zIndex: 1,
                }}
              >
                ${data.pricing}
              </Box>

              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{color:'var(--deep-green)'}}>
                  {data.title}
                </Typography>

                {data.offer && (
                  <Tooltip title="Offer Offer, grab it now" placement="right">
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily:'var(--secondary-font)',
                        color: "var(--safari-orange)",
                        fontWeight: 600,
                        mt: 0.5,
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "var(--amber)",
                        },
                      }}
                    >
                      {data.offer}
                    </Typography>
                  </Tooltip>
                )}

                <Typography variant="body2" sx={{ my: 1 ,textAlign:'left'}}>
                  {data.description}
                </Typography>

              <Box sx={{
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center'
              }}>
                  <Tooltip title="Click here to book now" placement="right" arrow>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2,backgroundColor:'var(--amber)','&:hover':{
                      backgroundColor:'var(--golden-yellow)'
                    } }}
                    component="a"
                  >
                    Book Now
                  </Button>
                </Tooltip>
                  <Tooltip title="Click here to learn more"  arrow>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2,backgroundColor:'var(--safari-orange)','&:hover':{
                      backgroundColor:'var(--golden-yellow)'
                    } }}
                    component="a"
                  >
                    Learn More
                  </Button>
                </Tooltip>
              </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
