import React from "react";

// mui
import { Typography, Box } from "@mui/material";

// ________________
import Filter from "../components/_dashboard/receivedInventory/Filter";
import AddBox from "../components/_dashboard/receivedInventory/AddBox";
import InventoryTable from "../components/_dashboard/receivedInventory/InventoryTable";

export default function Inventory() {
  return (
    <div>
      <Typography variant="h5" color="text.primary" mb={2}>
        Received Inventory
      </Typography>
      <Filter />
      <AddBox />
      <InventoryTable />
      <Box my={1}></Box>
    </div>
  );
}
