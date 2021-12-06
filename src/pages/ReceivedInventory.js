import React from "react";
import axios from "axios";
// react router dom
import { useNavigate } from "react-router-dom";
// mui
import { Typography, Box } from "@mui/material";

// ________________
import Filter from "../components/_dashboard/receivedInventory/Filter";
import AddBox from "../components/_dashboard/receivedInventory/AddBox";
import InventoryTable from "../components/_dashboard/receivedInventory/InventoryTable";
import BackDrop from "../components/Backdrop";

export default function Inventory() {
  const navigate = useNavigate();
  const [state, setstate] = React.useState({
    loading: true,
    data: null,
    open: false,
    inventoryData: null,
    count: 0,
  });
  const [sizes, setSizes] = React.useState(null);

  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      navigate("/login");
    }
    setstate((oldState) => ({ ...oldState, loading: true }));
    axios.get("/api/Constants").then((res) =>
      setstate((oldState) => ({
        ...oldState,
        loading: false,
        data: res.data,
      }))
    );
  }, [navigate]);

  return state.loading ? (
    <BackDrop />
  ) : (
    <div>
      <Typography variant="h5" color="text.primary" mb={2}>
        Received Inventory
      </Typography>
      <Filter
        res={state.data}
        onShow={(res) => setstate({ ...state, open: true, inventoryData: res })}
      />
      {state.open && (
        <>
          <AddBox
            data={state.inventoryData}
            onCount={() => setstate({ ...state, count: state.count + 1 })}
            onChangeSizes={(v) => setSizes(v)}
            sizes={sizes}
          />
          <InventoryTable
            sizes={sizes}
            data={state.inventoryData}
            count={state.count}
          />
        </>
      )}
      <Box my={1}></Box>
    </div>
  );
}
