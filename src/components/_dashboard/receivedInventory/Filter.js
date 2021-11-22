import React from "react";

// mui
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Box,
  Paper,
  Typography
} from "@mui/material/";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AddBox from "./AddBox"
const data = [
  {
    label: "Supplier Code",
    name: "supplierCode",
    type: "number",
  },
  {
    label: "STI No.",
    name: "stiNo",
    type: "number",
  },
  {
    label: "STI Date",
    name: "stiDate",
    type: "date",
  },
  {
    label: "Received on",
    name: "receivedOn",
    type: "date",
  },
  {
    label: "LR No.",
    name: "lrNo.",
    type: "number",
  },
  {
    label: "Category",
    name: "category",
    type: "select",
  },
  {
    label: "Total Quantity",
    name: "totalQuantity",
    type: "number",
  },
  {
    label: "Shipped by",
    name: "shippedBy",
    type: "select",
  },
  {
    label: "Received by",
    name: "receivedBy",
    type: "select",
  },
];

function percentage(percent, total) {
  return ((percent / 100) * total).toFixed(2)
}
export default function Filter() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box mb={4}>
        <Grid container spacing={3} justifyContent="space-between">
          {data.map((v, i) => (
            <Grid item lg={3} key={v.name}>
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
              ) : v.type === "date" ? (
                <DesktopDatePicker
                  label={v.label}
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{v.label}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={age}
                    label={v.label}
                  //   onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Grid>
          ))}
          <Grid item lg={4}>

            <Paper elevation={3} sx={{p:2}}>
              <Typography variant="h6" color="initial" sx={{ display: "block", fontSize: "1rem", fontWeight: 600, textAlign: "right", span:{ fontWeight:500,} }} >Total:<span> 2,40,000</span> </Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,}  }} >Freight:<span>9655,00</span></Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,}  }}  >Taxable value: <span>433840,00</span></Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,} , textTransform: "uppercase" }} >Sgst 2.50% : ----</Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,} , textTransform: "uppercase" }} >Cgst 2.50% : ----</Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,} , textTransform: "uppercase" }} >Igst 5%:<span> 21692</span></Typography>
              <Typography variant="h6" color="initial" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "right",span:{ fontWeight:500,}  }} >Grand total:<span>{45550000 - percentage(5, 45550000)} INR</span></Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <AddBox />
    </div >
  );
}
