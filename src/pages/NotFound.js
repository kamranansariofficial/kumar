import React from "react";
import { Typography, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" color="text.primary">
        Page not found!
      </Typography>
    </Box>
  );
}
