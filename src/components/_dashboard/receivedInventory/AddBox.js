import React from "react";
import { TextField, Grid, Box, Paper, Button, Hidden } from "@mui/material/";

const inventoryData = [
  {
    label: "Lot No",
    name: "lotNo",
    type: "number",
  },
  {
    label: "No. of Bundles",
    name: "noOfBundles",
    type: "number",
  },
  {
    label: "Total Boxes",
    name: "totalBoxes",
    type: "number",
  },
  {
    label: "Size",
    name: "size",
    type: "number",
  },
  {
    label: "Quantity",
    name: "Quantity",
    type: "number",
  },
  {
    label: "Amount",
    name: "amount",
    type: "number",
  },
];

export default function AddBox() {
  return (
    <div>
      <Box
        component={Paper}
        sx={{ bgcolor: "#dce2e5", m: "0 -24px", p: "24px" }}
      >
        <Grid container spacing={2}>
          <Grid item lg={10} md={10} sm={10}>
            <Grid container spacing={2}>
              {inventoryData.map((v, i) => (
                <Grid key={Math.random()} item lg={2} md={3} sm={4} xs={6}>
                  {v.type === "number" ? (
                    <TextField
                      fullWidth
                      label={v.label}
                      id={v.name}
                      // value={}
                      // onChange={}
                      type={v.type}
                      variant="outlined"
                    />
                  ) : (
                    ""
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item md={2}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="secondary"
                sx={{ fontSize: "16px", height: 56 }}
              >
                Add entry
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
}
