import React from "react";
import axios from "axios";

// react router dom
import { Link, useNavigate } from "react-router-dom";

// material
import { TextField, Button, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// images
import Image from "../img/IMG-20211121-WA0005.jpg";
import BgImage from "../img/IMG-20211121-WA0004.jpg";
import SimpleBackdrop from "../components/Backdrop";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({
    loginName: "",
    password: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = () => {
    setLoading(true);
    axios
      .post(
        "/api/Login/Authenticate",
        {
          ...state,
        }
      )
      .then((res) => {
        setError(false);
        setOpen(true);
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        setError(true);
        setOpen(true);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      navigate("/");
    }
  }, []);
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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error ? "Email or password is incorrect!" : "Login successfully!"}
        </Alert>
      </Snackbar>
      {loading && <SimpleBackdrop />}
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
            onChange={(e) => setstate({ ...state, loginName: e.target.value })}
            type="text"
            varaint="outlined"
            placeholder="Username"
            fullWidth
            sx={{ backgroundColor: "#ffff", borderRadius: "5px", mt: 1 }}
          />
          <TextField
            onChange={(e) => setstate({ ...state, password: e.target.value })}
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
            onClick={onSubmit}
          >
            Log In
          </Button>
        </Box>
      </div>
    </Box>
  );
}
