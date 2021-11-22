import React from "react";

// react router dom
import { Link, useNavigate } from "react-router-dom";

// material
import { TextField, Button, Box } from "@mui/material";

// images
import Image from "../img/IMG-20211121-WA0005.jpg";
import BgImage from "../img/IMG-20211121-WA0004.jpg";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Box
          sx={{
            display: "block",
            maxWidth: "400px",
            backgroundColor: "#EE1D23",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "15px",
            p: "15px",
            mx: 1,
          }}
        >
          <img src={Image} alt="Kumar" style={{ width: "150px" }} />
          <TextField
            type="text"
            varaint="outlined"
            placeholder="Username"
            fullWidth
            sx={{ backgroundColor: "#ffff", borderRadius: "5px", mt: 1 }}
          />
          <TextField
            type="password"
            varaint="outlined"
            placeholder="Password"
            fullWidth
            sx={{ backgroundColor: "#ffff", borderRadius: "5px", my: 1 }}
          />
          <Link to="#">Forgot your password?</Link>
        </Box>
        <Box
          sx={{
            maxWidth: "431px",
            mx: 1,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              color: "#ffff",
              fontWeight: 600,
              textTransform: "capitalize",
              p: "16px 8px",
              borderRadius: "0 0 15px 15px",
              fontSize: "24px",
              boxShadow: "none",
            }}
            onClick={() => navigate("/")}
          >
            Log In
          </Button>
        </Box>
      </div>
    </Box>
  );
}
