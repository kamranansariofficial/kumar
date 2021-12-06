import React from "react";
import axios from "axios";
import { TextField, Grid, Box, Paper, Button } from "@mui/material/";
import SimpleBackdrop from "../../Backdrop";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddBox({ data, onCount, onChangeSizes, sizes }) {
  const { id } = data;
  const initialState = {
    purchaseInvoiceInfoId: id,
    lotNumber: "",
    bundleCount: "",
    totalBoxes: "",
    sizeIds: "",
    quantity: "",
    totalAmount: "",
    assignee: "string",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({ ...initialState });

  const onSubmit = () => {
    setLoading(true);
    axios
      .post("/api/Lot", {
        ...state,
      })
      .then((res) => {
        onCount();
        setLoading(false);
        setError(false);
        setOpen(true);
        setstate({ ...initialState });
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

  const onChangeMultiSelect = (e, val) => {
    const ids = val.map((v) => v.id);
    setstate({ ...state, sizeIds: ids.join() });
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/Constants`)
      .then((response) => {
        onChangeSizes(response.data.sizeData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [onChangeSizes]);

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
      <Box
        component={Paper}
        sx={{ bgcolor: "#dce2e5", m: "0 -24px", p: "24px" }}
      >
        <Grid container spacing={2}>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <TextField
              fullWidth
              label="Lot No"
              value={state.lotNumber}
              onChange={(e) =>
                setstate({ ...state, lotNumber: parseInt(e.target.value) })
              }
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <TextField
              fullWidth
              label="No. of Bundles"
              value={state.bundleCount}
              onChange={(e) =>
                setstate({
                  ...state,
                  bundleCount: parseInt(e.target.value),
                })
              }
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <TextField
              fullWidth
              label="Total Boxes"
              value={state.totalBoxes}
              onChange={(e) =>
                setstate({ ...state, totalBoxes: parseInt(e.target.value) })
              }
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <TextField
              fullWidth
              label="Quantity"
              value={state.quantity}
              onChange={(e) =>
                setstate({ ...state, quantity: parseInt(e.target.value) })
              }
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            {/* <TextField
                  fullWidth
                  label="Size"
                  value={state.sizeIds}
                  onChange={(e) =>
                    setstate({ ...state, sizeIds: e.target.value })
                  }
                  type="number"
                  variant="outlined"
                /> */}
            {sizes && (
              <Autocomplete
                multiple
                id="tags-standard"
                options={sizes}
                onChange={onChangeMultiSelect}
                getOptionLabel={(option) => option.sizeValue}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Sizes" />
                )}
              />
            )}
          </Grid>

          <Grid item lg={3} md={3} sm={4} xs={6}>
            <TextField
              fullWidth
              label="Amount"
              value={state.totalAmount}
              onChange={(e) =>
                setstate({
                  ...state,
                  totalAmount: parseInt(e.target.value),
                })
              }
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              color="secondary"
              sx={{ fontSize: "16px", height: 56 }}
              onClick={onSubmit}
            >
              Add entry
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
