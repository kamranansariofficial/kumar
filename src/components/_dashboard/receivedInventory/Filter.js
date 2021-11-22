import React from "react";

// mui
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material/";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

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
export default function Filter() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {data.map((v, i) => (
          <Grid item lg={3}>
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
      </Grid>
    </div>
  );
}
