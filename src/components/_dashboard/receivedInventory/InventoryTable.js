import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import TableDialog from "./TableDialog";
const row = [
  {
    lot: 129901,
    bundle: 10,
    boxes: 10,
    size: "36-46",
    quantity: 400,
    amount: "2,40,000 INR",
  },
  {
    lot: 129902,
    bundle: 10,
    boxes: 12,
    size: "36-46",
    quantity: 400,
    amount: "2,40,000 INR",
  },
  {
    lot: 129903,
    bundle: 10,
    boxes: 14,
    size: "36-46",
    quantity: 400,
    amount: "2,40,000 INR",
  },
  {
    lot: 129904,
    bundle: 10,
    boxes: 16,
    size: "36-46",
    quantity: 400,
    amount: "2,40,000 INR",
  },
];
export default function InventoryTable() {
  return (
    <>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table
          size="small"
          aria-label="simple table"
          sx={{ minWidth: 800, mt: 3 }}
        >
          <TableHead sx={{ bgcolor: "#5b6266" }}>
            <TableRow>
              <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                Lot No
              </TableCell>
              <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                Bundles#
              </TableCell>
              <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                Boxes
              </TableCell>
              <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                Size
              </TableCell>
              <TableCell
                sx={{ color: "#ffff", fontWeight: 600 }}
                align="center"
              >
                Quantity
              </TableCell>
              <TableCell sx={{ color: "#ffff", fontWeight: 600 }} align="right">
                Total Amount
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((v) => (
              <TableRow
                key={Math.random()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {v.lot}
                </TableCell>
                <TableCell>{v.bundle}</TableCell>
                <TableCell>{v.boxes}</TableCell>
                <TableCell>
                  <TextField defaultValue={v.size} size="small" />
                </TableCell>
                <TableCell align="center">{v.quantity}</TableCell>
                <TableCell align="right">{v.amount}</TableCell>
                <TableCell align="right">
                  <TableDialog row={v} />
                  <Button
                    variant="text"
                    color="error"
                    size="small"
                    sx={{ mx: 1 }}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
