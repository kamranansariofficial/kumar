import React from "react";
import axios from "axios";

// mui
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Box,
} from "@mui/material/";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";
import SimpleBackdrop from "../../Backdrop";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const data = [
  {
    label: "Supplier Code",
    name: "supplier",
    type: "select",
  },
  {
    label: "STI No.",
    name: "stiNo",
    type: "number",
  },
  {
    label: "STI Date",
    name: "invoiceDate",
    type: "date",
  },
  {
    label: "Received on",
    name: "receivedDate",
    type: "date",
  },
  {
    label: "LR No.",
    name: "lrNumber",
    type: "text",
  },
  {
    label: "Category",
    name: "category",
    type: "select",
  },
  {
    label: "Total Quantity",
    name: "totalQuantity",
    type: "text",
  },
  {
    label: "Shipped by",
    name: "shippedBy",
    type: "select",
  },
  {
    label: "Received by",
    name: "recievedBy",
    type: "select",
  },
  {
    label: "Total",
    name: "totalAmount",
    type: "number",
  },
  {
    label: "Frieght",
    name: "frieght",
    type: "number",
  },
  {
    label: "Taxable value",
    name: "taxableAmount",
    type: "number",
  },
  {
    label: "SGST 2.50% ",
    name: "sgst",
    type: "number",
  },
  {
    label: "CGST 2.50% ",
    name: "cgst",
    type: "number",
  },
  {
    label: "IGST 5%",
    name: "igst",
    type: "number",
  },
  {
    label: "Grand total",
    name: "grandTotal",
    type: "number",
  },
];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const initializeData = {
  categoryId: "",
  supplierCode: "",
  recievedBy: "",
  shippedBy: "",
  invoiceNumber: "string",
  invoiceDate: new Date().toISOString(),
  receivedDate: new Date().toISOString(),
  lrNumber: "",
  totalQuantity: "",
  receivedStatus: "",
  distributedStatus: "",
  frieght: "",
  stiNo: Number,
  taxableAmount: "",
  totalAmount: "",
  grandTotal: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  sgst: "",
  cgst: "",
  igst: "",
};

export default function Filter({ res, onShow }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({ ...initializeData });

  const handleChange = (prop) => (e) => {
    setstate({
      ...state,
      [prop === "category"
        ? "categoryId"
        : prop === "supplier"
        ? "supplierCode"
        : prop]: e.target.value,
    });
  };

  const onSubmit = () => {
    setLoading(true);
    axios
      .post(
        "http://ec2-18-220-233-68.us-east-2.compute.amazonaws.com/api/PurchaseInvoice",
        {
          ...state,
        }
      )
      .then((res) => {
        setError(false);
        setOpen(true);
        setLoading(false);
        onShow(res.data);
      })
      .catch((err) => {
        setError(true);
        setOpen(true);
        setLoading(false);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error ? "Some fields are missing!" : "Submitted successfully!"}
        </Alert>
      </Snackbar>
      {loading && <SimpleBackdrop />}
      <Box mb={2}>
        <Grid container spacing={2} justifyContent="space-between">
          {data.map((v, i) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={v.name}>
              {v.type === "number" || v.type === "text" ? (
                <TextField
                  label={v.label}
                  id={v.name}
                  value={state[v.name]}
                  onChange={(e) =>
                    setstate({
                      ...state,
                      [v.name]:
                        v.name === "totalQuantity" || v.name === "lrNumber"
                          ? e.target.value
                          : parseInt(e.target.value),
                    })
                  }
                  type={v.type}
                  fullWidth
                  variant="outlined"
                />
              ) : v.type === "date" ? (
                <DesktopDatePicker
                  label={v.label}
                  inputFormat="MM/dd/yyyy"
                  value={state[v.name]}
                  onChange={(date) =>
                    setstate({
                      ...state,
                      [v.name]: new Date(date).toISOString(),
                    })
                  }
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {v.label}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={state[]}
                    label={v.label}
                    onChange={handleChange(v.name)}
                  >
                    {res[v.name + "Data"].map((val) => (
                      <MenuItem
                        value={
                          val[
                            v.name === "supplier"
                              ? "supplierCode"
                              : v.name + "Id"
                          ]
                        }
                      >
                        {val[v.name + "Name"]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Grid>
          ))}
        </Grid>
        <Box ml="auto" display="table" mt={2}>
          <Button
            onClick={() => setstate({ ...initializeData })}
            variant="contained"
            color="error"
          >
            Reset
          </Button>
          <Button
            onClick={onSubmit}
            sx={{ ml: 1 }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
}
