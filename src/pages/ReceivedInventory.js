import React from "react";

// mui
import { Typography } from "@mui/material";

// ________________
import Filter from "../components/_dashboard/receivedInventory/Filter";

export default function Inventory() {
  return (
    <div>
      <Typography variant="h5" color="text.primary" mb={2}>
        Received Inventory
      </Typography>
      <Filter />
    </div>
  );
}
