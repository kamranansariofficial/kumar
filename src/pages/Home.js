import React from "react";
// react router dom
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Typography variant="h5" color="text.primary">
        Hello from Home
      </Typography>
    </div>
  );
}
