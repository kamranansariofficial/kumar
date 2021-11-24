import * as React from "react";
import PropTypes from "prop-types";
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
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import TableDialog from "../../_dashboard/receivedInventory/TableDialog";
import InventoryDialog from "../../_dashboard/inventoryManagment/InventoryDialog"
function createData(
  SNo,
  STINo,
  supplierCode,
  category,
  lotsNo,
  total,
  receivedOn,
  recStatus,
  distStatus
) {
  return {
    SNo,
    STINo,
    supplierCode,
    category,
    lotsNo,
    receivedOn,
    total,
    recStatus,
    distStatus,
    history: [
      {
        lotNo: 129902,
        boxes: 10,
        designCode: 2727,
        sizes: "38 - 40",
        rate: "450INR",
        quantity: 200,
        difference: 2,
        amount: "90,000INR",
      },
      {
        lotNo: 129902,
        boxes: 20,
        designCode: 2727,
        sizes: "38 - 40",
        rate: "450INR",
        quantity: 200,
        difference: 4,
        amount: "90,000INR",
      },
      {
        lotNo: 129902,
        boxes: 40,
        designCode: 2727,
        sizes: "38 - 40",
        rate: "450INR",
        quantity: 200,
        difference: 0,
        amount: "90,000INR",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.SNo}</TableCell>
        <TableCell>
          <Link href="/">{row.STINo}</Link>
        </TableCell>
        <TableCell>{row.supplierCode}</TableCell>
        <TableCell>{row.category}</TableCell>
        <TableCell>{row.lotsNo}</TableCell>
        <TableCell>{row.total}</TableCell>
        <TableCell>{row.receivedOn}</TableCell>
        <TableCell>
          {" "}
          <Chip
            size="small"
            label={row.recStatus}
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
            label={row.distStatus}
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 500 }}
              >
                Details
              </Typography> */}
              <Table size="small" aria-label="purchases">
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
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.lotNo}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#0DA1DA",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        <InventoryDialog row={historyRow}/>
                      </TableCell>
                      <TableCell>{historyRow.designCode}</TableCell>
                      <TableCell>{historyRow.sizes}</TableCell>
                      <TableCell>{historyRow.rate}</TableCell>
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
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        <TableDialog row={historyRow} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        lotNo: PropTypes.number.isRequired,
        boxes: PropTypes.number.isRequired,
        designCode: PropTypes.number.isRequired,
        sizes: PropTypes.string.isRequired,
        rate: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        difference: PropTypes.number.isRequired,
        amount: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, "2202D110", "ACD110", 24, 4.0, 3.99, 3.99, "New", "New"),
  createData(
    2,
    "2202D111",
    "ACD110",
    37,
    4.3,
    4.99,
    4.99,
    "Partial",
    "Partial"
  ),
  createData(
    3,
    "2202D112",
    "ACD110",
    24,
    6.0,
    3.79,
    3.79,
    "Complete",
    "Complete"
  ),
  createData(
    4,
    "2202D113",
    "ACD110",
    67,
    4.3,
    2.51,
    2.51,
    "Complete",
    "Complete"
  ),
];

export default function InventoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
