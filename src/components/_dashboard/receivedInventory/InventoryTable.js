import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import SimpleBackdrop from "../../Backdrop";
import TableDialog from "./TableDialog";

export default function InventoryTable({ data, count, sizes }) {
  const { id } = data;
  const [loading, setLoading] = React.useState(true);
  //
  const [state, setstate] = React.useState();
  React.useEffect(() => {
    axios
      .get(`/api/Lot?purchaseInvoiceId=${id}`)
      .then((response) => {
        setstate(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [count, id]);

  const getSizes = (v) => {
    const split = v.split(",");

    const filtered = sizes.filter((ob) => split.includes(ob.id.toString()));
    const filteredData = filtered.map((val) => val.sizeValue);

    return filteredData.join();
  };

  return (
    <>
      <TableContainer sx={{ overflowX: "auto" }}>
        {loading && <SimpleBackdrop />}
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
            {!loading &&
              state.data.map((v) => (
                <TableRow
                  key={Math.random()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onChange={(e) =>
                      setstate({ ...state, lotNumber: e.target.value })
                    }
                  >
                    {v.lotNumber}
                  </TableCell>
                  <TableCell>{v.bundleCount}</TableCell>
                  <TableCell>{v.totalBoxes}</TableCell>
                  <TableCell>{getSizes(v.sizeIds)}</TableCell>
                  <TableCell align="center">{v.quantity}</TableCell>
                  <TableCell align="right">{v.totalAmount}</TableCell>
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
