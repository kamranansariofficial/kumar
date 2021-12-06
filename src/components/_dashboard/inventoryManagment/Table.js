import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableDialog from "../../_dashboard/receivedInventory/TableDialog";
import InventoryDialog from "../../_dashboard/inventoryManagment/InventoryDialog";
import SimpleBackdrop from "../../Backdrop";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({
    loading: false,
    data: null,
  });
  const onOpen = (prop) => () => {
    if (!open) {
      setstate({ ...state, loading: true });
      axios
        .get(
          `/api/Lot?purchaseInvoiceId=${prop.id}`
        )
        .then((response) => {
          setstate({ ...state, loading: false, data: response.data });
          setOpen(!open);
        })
        .catch((err) => {
          setstate({ ...state, loading: false });
        });
    } else {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={onOpen(row)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>
          <Link href="/">{row.STINo}</Link>
        </TableCell>
        <TableCell>{row.supplierCode}</TableCell>
        <TableCell>{row.categoryId}</TableCell>
        <TableCell>{row.lrNumber}</TableCell>
        <TableCell>{row.totalAmount}</TableCell>
        <TableCell>{row.receivedDate}</TableCell>
        <TableCell>
          {" "}
          <Chip
            size="small"
            label={row.recStatus ? row.recStatus : "New"}
            color={
              row.recStatus === "New"
                ? "info"
                : row.recStatus === "Partial"
                ? "warning"
                : "success"
            }
          />
        </TableCell>
        <TableCell>
          <Chip
            size="small"
            label={row.distStatus ? row.distStatus : "New"}
            color={
              row.distStatus === "New"
                ? "info"
                : row.distStatus === "Partial"
                ? "warning"
                : "success"
            }
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ pt: 0, pb: 0 }} colSpan={10}>
          {state.loading ? (
            <SimpleBackdrop />
          ) : (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <TableContainer>
                  <Table sx={{ minWidth: 800 }} aria-label="purchases">
                    <TableHead
                      sx={{ bgcolor: "#0DA1DA", "& th": { color: "#fff" } }}
                    >
                      <TableRow>
                        <TableCell>Lot No.</TableCell>
                        <TableCell>Boxes</TableCell>
                        <TableCell>Design Code</TableCell>
                        <TableCell>Sizes</TableCell>
                        <TableCell>Rate/Piece</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Difference</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data &&
                        state.data.map((historyRow) => (
                          <TableRow key={Math.random()}>
                            <TableCell component="th" scope="row">
                              {historyRow.lotNumber}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#0DA1DA",
                                cursor: "pointer",
                                textDecoration: "underline",
                              }}
                            >
                              <InventoryDialog row={historyRow} />
                            </TableCell>
                            <TableCell>{historyRow.designCode}</TableCell>
                            <TableCell>{historyRow.sizeIds}</TableCell>
                            <TableCell>{historyRow.totalAmount}</TableCell>
                            <TableCell>{historyRow.quantity}</TableCell>
                            <TableCell
                              sx={{
                                color:
                                  historyRow.difference === 4
                                    ? "#FF1844"
                                    : historyRow.difference === 2
                                    ? "grey"
                                    : "green",
                              }}
                            >
                              {historyRow.difference}
                            </TableCell>
                            <TableCell>{historyRow.totalAmount}</TableCell>
                            <TableCell>
                              <TableDialog row={historyRow} />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function InventoryTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#0DA1DA", "& th": { color: "#fff" } }}>
            <TableCell />
            <TableCell>SNo</TableCell>
            <TableCell>STI No.</TableCell>
            <TableCell>Supplier Code</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>No. of Lots</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Received on</TableCell>
            <TableCell>Rec Status</TableCell>
            <TableCell>Dist. Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={Math.random()} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
