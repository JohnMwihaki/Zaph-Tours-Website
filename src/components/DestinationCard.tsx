import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  CardContent,
} from "@mui/material";

interface DestinationProps {
  name: string;
  image: string;
  description: string;
  groupPrice: number;
  individualPrice: number;
  link: string;
}

const DestinationCard = ({
  name,
  image,
  description,
  groupPrice,
  individualPrice,
  link,
}: DestinationProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "20rem",
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        mb: 4,
      }}
    >
      <Box sx={{ width: "50%", position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Button
          component="a"
          href={link}
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: "var(--golden-yellow)",
            color: "white",
            "&:hover": {
              backgroundColor: "var(--safari-orange)",
            },
          }}
        >
          View More
        </Button>
      </Box>

      <CardContent
        sx={{
          width: "50%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--deep-green)",
            fontSize: "1.5rem",
            fontWeight: 700,
            textAlign: "left",
            mb: 1,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "var(--safari-orange)",
            fontFamily: "var(--secondary-font)",
            mb: 1,
            fontSize: "1.2rem",
            textTransform:'capitalize'
          }}
        >
         Venture together at ${groupPrice} or Claim It as one  for ${individualPrice}

        </Typography>

        <Typography
          sx={{
            color: "var(--earth-brown)",
            fontSize: "1rem",
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
