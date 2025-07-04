import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Avatar,
  TextField,
  Rating,
} from "@mui/material";
import { destinations } from "../Data/featuredDestination";
import { TestimoniesData } from "../Data/testimonies";

export default function HomePage() {
  return (
    <>
      <Box>
        <Box
          maxWidth="xl"
          sx={{
            backgroundImage: `linear-gradient(rgba(255, 152, 0, 0.2), rgba(255, 87, 34, 0.1)), url('./background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            px: 6,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 8,
            }}
          >
            <Box sx={{ maxWidth: "500px", flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                  color: "h3.color",
                  
                }}
              >
                Best safaris and adventures
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  color: "body1.color",
                  
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                iste ab a
              </Typography>

              <Stack direction="row" spacing={3} m={4}>
                <Button
                  component="a"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: "greenyellow",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#7FB800",
                    },
                  }}
                >
                  Read More
                </Button>
                <Button
                  component="a"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                     backgroundColor: "var(--safari-orange)",
                    color: "white",
                    "&:hover": {
                     
                       backgroundColor: "var(--golden-yellow)",
                    },
                  }}
                >
                  Enquire
                </Button>
              </Stack>
            </Box>

            <Box
              component="img"
              src="./lion.jpg"
              alt="Safari Experience"
              sx={{
                width: { xs: "250px", md: "350px" },
                height: { xs: "250px", md: "350px" },
                borderRadius: "50%",
                backgroundPosition: "center",
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            /> 
          </Box>
        </Box>

        {/* about section */}

        <Container
          maxWidth="xl"
          sx={{
            px: 2,
            py: 2,
            backgroundColor: "var(--light-grey)",
          }}
        >
          <Box sx={{ px: 4, py: 1 }}>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                color: "var(--earth-brown)",
              }}
            >
              What About Us
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: 500,
                mt: 3,
                color: "var(--dark)",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              adipisci nisi iste! Eveniet volu
            </Typography>

            <Stack   direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center" mt={6}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    borderLeft: "3px solid red",
                    pl: 2,
                    color: "var(--earth-brown)",
                  }}
                >
                  About
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "grey",
                    mt: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione illum amet facere,
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="./about-us.png"
                  alt="Tour Guide"
                  sx={{
                    width: {xs:'100%',md:'400px'},
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    fontStyle: "italic",
                    color: "var(--stone-grey)",
                  }}
                >
                  Group photo
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row-reverse" }}
              
              spacing={4}
              alignItems="center"
              mt={6}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    borderLeft: "3px solid green",
                    pl: 2,
                    color: "var(--earth-brown)",
                  }}
                >
                  Mission
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "grey",
                    mt: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione illum amet facere,
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="./mission.jpg"
                  alt="Mission Photo"
                  sx={{
                    width:{xs:'100%',md:'400px'},
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    fontStyle: "italic",
                    color: "var(--stone-grey)",
                  }}
                >
                  Mission Photo
                </Typography>
              </Box>
            </Stack>

            <Stack direction={{xs:'column',md:'row'}} spacing={4} alignItems="center" mt={6}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    borderLeft: "3px solid blue",
                    pl: 2,
                    color: "var(--earth-brown)",
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "grey",
                    mt: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, ipsum ratione consequatur quae animi temporibus
                  modi laudantium eos earum autem saepe dolore error recusandae
                  officiis mollitia adipisci corporis dolorum asperiores?
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="./vision.jpg"
                  alt="Vision Photo"
                  sx={{
                    width:{xs:'100%',md:'400px'},
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ mt: 1, fontStyle: "italic", color: "gray" }}
                >
                  Vision Photo
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Typography
            variant="h2"
            textAlign="center"
            mt={8}
            sx={{ color: "var(--earth-brown)" }}
          >
            Meet Our Team
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: 500,
              mt: 3,
              color: "grey",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            adipisci nisi iste! Eveniet volu
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            sx={{
              px: 4,
              py: 6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src="./tourguide.jpg"
                alt="Tour guide"
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                fontWeight={600}
                fontSize="1rem"
                color="var(--sky-blue)"
              >
                John Tour Guide
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expert in adventure and cultural travel
              </Typography>
            </Paper>

            <Paper
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src="./tourplanner.jpg"
                alt="planner guide"
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                fontWeight={600}
                fontSize="1rem"
                color="var(--sky-blue)"
              >
                Hadassah Tour Planner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Crafts personalized safari experiences
              </Typography>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src="./customercare.jpg"
                alt="Customer care"
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                fontWeight={600}
                fontSize="1rem"
                color="var(--sky-blue)"
              >
                RozerLine CustomerCare
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Always here to support your journey
              </Typography>
            </Paper>
          </Stack>

          <Typography
            className="calltoaction"
            sx={{
              textAlign: "center",
              mt: 4,
              fontSize: "1.1rem",
              color: "var(--stone-grey)",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing el
          </Typography>
        </Container>

        {/*Destination section*/}
        <Container maxWidth="lg" sx={{ my: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            color="primary"
            sx={{
              textAlign: "center",
              fontFamily: "Dancing Script, cursive",
              fontWeight: "bold",
              fontSize: "4rem",
            }}
          >
            Featured Destinations
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}
          >
            Discover our top travel spots for unforgettable safari experiences.
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={3}>
            {destinations.map((dest, i) => (
              <Paper
                elevation={6}
                key={i}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "350px" },
                  borderRadius: 3,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Box
                  component="img"
                  src={dest.image}
                  alt={dest.name}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    background: "linear-gradient(45deg rgba(0,0,0,.3)",
                    borderRadius: 3,
                    mb: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />

                <Typography className="name" variant="h6">
                  {dest.name}
                </Typography>

                <Typography variant="body2" className="describe">
                  {dest.description}
                </Typography>

                <Typography
                  variant="subtitle2"
                  component="div"
                  className="price"
                >
                  ${dest.price}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Container>

        {/* testimonies section */}
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "var(--light-grey)",
            borderRadius: 2,
            opacity: 0.8,
            py: 4,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              color="var(--earth-brown)"
              sx={{
                textAlign: "center",
                fontFamily: "Dancing Script, cursive",
                fontWeight: "bold",
                fontSize: "4rem",
              }}
            >
              Testimonies
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                color: "text.secondary",
                mb: 4,
                px: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={3}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
            
          >
            {TestimoniesData.map((testi, idx) => (
              <Box
                component="div"
                key={idx}
                sx={{
                  maxWidth: 350,
                  width: "100%",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    p: 3,
                    mb: 3,
                    borderRadius: "1.2rem",
                    backgroundColor: "white",
                    boxShadow: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "var(--earth-brown)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {testi.comment}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        border: "2px solid var(--stone-grey)",
                        width: 60,
                        height: 60,
                      }}
                    >
                      {testi.image}
                    </Avatar>
                    <Box sx={{width:'100%'}}>
                      <Typography
                        sx={{
                          color: "var(--dark)",
                          fontWeight: 600,
                          fontSize: "1rem",
                        }}
                      >
                        {testi.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {testi.describe}
                      </Typography>
                      <Rating
                    
                        value={testi.rating}
                        size="small"
                        sx={{textAlign:"right"}}
                        readOnly
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Container>

        {/*--subscribe to  newspaper--*/}
        <Box sx={{ py: 6, backgroundColor: "var(--smoke-white)" }}>
          <Box textAlign="center" mb={3}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontFamily: "Dancing script,cursive",
                fontSize: "2rem",
                color: "var(--earth-brown)",
              }}
            >
              Subscribe To Our Newsletter
            </Typography>
            <Typography
              sx={{
                color: "var(--stone-grey)",
                maxWidth: 700,
                mx: "auto",
                fontSize: "1rem",
                mt: 1,
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              consequuntur vel ducimus enim maxime, reiciendis nam quas quidem
              accusamus provident.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Stack direction="row" spacing={0} sx={{width:{sx:'100%'}}}>
              <TextField
                placeholder="Enter Email Address"
                variant="outlined"
                sx={{
                  width: 320,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "white",
                  "& fieldset": {
                    borderRight: "none",
                  },
                  "& input": {
                    padding: "2px 4px",
                    color:'red'
                  },
                }}
                InputProps={{
                  sx: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--amber)",
                  color: "#fff",
                  px: 2,
                  fontWeight: "bold",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  "&:hover": {
                    backgroundColor: "(--amber)",
                  },
                  
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
