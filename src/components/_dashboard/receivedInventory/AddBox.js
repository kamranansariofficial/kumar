import React from 'react'
import {
    TextField,
    Grid,
    Box,
    Paper,
    Button,
} from "@mui/material/";
import InventoryTable from "./InventoryTable";


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
        label: "Boxes",
        name: "boxes",
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
]

export default function AddBox() {
    return (
        <div>
            <Box component={Paper} sx={{ bgcolor: "#dce2e5", m: "0 -24px", p: "24px" }}>
                <Grid container spacing={2}>
                    <Grid item lg={10}>
                        <Grid container spacing={2}>
                            {inventoryData.map((v, i) => (
                                <Grid item lg={2} key={v.name}>
                                    {v.type === "number" ? (
                                        <TextField
                                            label={v.label}
                                            id={v.name}
                                            // value={}
                                            // onChange={}
                                            type={v.type}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    )
                                        : ""}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained" size="large" fullWidth color="secondary" sx={{ fontSize: "21px" }}>Add entry</Button>
                    </Grid>
                </Grid>

            </Box>
            <Box my={1}>
                <InventoryTable />
                <Box my={2} sx={{ textAlign: "center" }}>
                    <Button variant="text" color="secondary" sx={{ px: 5, mx: 1 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ px: 5 }}>
                        Save
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
