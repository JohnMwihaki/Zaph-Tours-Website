import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B3D3A",
    },
    secondary: {
      main: "#E0A96D",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#4B3D3A",
      secondary: "#555555",
    },
    warning: {
      main: "#F8CC22",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Dancing Script, cursive",
      fontWeight: 700,
      fontSize: "3rem",
      color: "red",
    },
    h2: {
      fontFamily: "Dancing Script, cursive",
      fontWeight: 600,
      fontSize: "2.25rem",
      textAlign: "center",
      marginTop: "30px",
    },
    h3: {
      fontFamily: "Dancing Script, cursive",
      fontWeight: "bold",
      color: "white",
      padding: "2rem",
    },
    h5: {
      fontFamily: "Dancing Script, cursive",
      padding: "2rem",
      textAlign: "center",
    },
    h6: {
      fontSize: "1.2rem",
      textAlign: "left",
      fontFamily: "400",
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.5rem",
      color: "white",
      padding: "1rem 2rem",
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "grey",
      mt: 1,
      textAlign: "center",
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      :root {
        --primary-font: "Poppins,san-serifs";
        --secondary-font: "Dancing Script, cursive";
        --deep-green: rgb(34, 93, 37);
        --safari-orange: rgba(255, 152, 0, 1);
        --earth-brown: rgba(93, 64, 55, 1);
        --smoke-white: rgb(255, 255, 253);
        --soft-sand: rgba(245, 245, 220, 1);
        --stone-grey: rgba(189, 189, 189, 1);
        --light-grey: rgba(180, 174, 169, 0.22);
        --dark: rgba(19, 18, 18, 0.88);
        --golden-yellow: rgba(255, 213, 79, 1);
        --sky-blue: rgba(129, 212, 250, 1);
        --amber: rgb(236, 33, 33);
      }

      .name {
        font-size: 1.2rem;
        text-align: left;
        padding: 5px;
        font-weight: 400;
        color: var(--deep-green);
      }

      .describe {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-size: 2.25rem;
        text-align: left;
        margin-top: 30px;
        line-height: 1.6;
        min-height: 60px;
        margin-bottom: 30px;
        padding: 5px;
        color: var(--stone-grey);
      }

      .price {
        position: absolute;
        top: 0;
        left: 2px;
        border-radius: 5px 4px 5px 4px;
        margin: 3px;
        background-color: var(--safari-orange);
        padding: 0.3rem 0.9rem;
        color: var(--soft-sand);
      }

      .testi-wrapper {
        display: block;
        border-radius: 3px;
        max-width: 350px;
        width: 100%;
        
      }

      .attention-title {
        color: var(--deep-green);
        font-family: var(--secondary-font);
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
      }

      .title {
        color: var(--deep-green);
        font-weight: 800;
        font-size: 2rem;
        text-align: left;
        padding: 0;
      }

      .package-describe {
        text-align: left;
        color: var(--stone-grey);
        padding: 0;
      }

      .package-price {
        position: absolute;
        top: 0;
        left: 1;
        color: var(--amber);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        padding: 2px 4px;
        font-weight: 700;
        font-size: 1rem;
        border-radius: 0 0 8px 0;
        z-index: 2;
      }

      .package-offer {
        font-family:var( --secondary-font);
        color:var(--safari-orange);
        font-size: .5rem;
        font-weight:500;
        z-index: 1;
      }
        .package-offer:hover{
         color:var(--amber);
        }

      .booking {
        background-color: var(--amber);
        color: var(--smoke-white);
        text-align: center;
        margin-top: 10px;
      }

      .booking:hover {
        background-color: var(--safari-orange);
      }
      

    `,
    },
  },
});

export default theme;
