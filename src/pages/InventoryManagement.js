import React from "react";
import axios from "axios";
// react router dom
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// _____________________
import InventoryTable from "../components/_dashboard/inventoryManagment/Table";
import { useTheme } from "@mui/material/styles";
import BackDrop from "../components/Backdrop";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InventoryManagement() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state, setstate] = React.useState({
    loading: true,
    data: null,
    open: false,
    inventoryData: null,
    count: 0,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      navigate("/login");
    }
    setstate((oldState) => ({ ...oldState, loading: true }));
    axios
      .get(
        "http://ec2-18-220-233-68.us-east-2.compute.amazonaws.com/api/PurchaseInvoice?limit=10&offset=0"
      )
      .then((res) =>
        setstate((oldState) => ({
          ...oldState,
          loading: false,
          data: res.data,
        }))
      );
  }, [navigate]);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          "& #simple-tabpanel-0 > .MuiBox-root": {
            padding: "24px 0px!important",
          },
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root": {
                color: theme.palette.text.primary.main,
                "&.Mui-selected": {
                  color: theme.palette.error.main,
                },
              },
              "& .MuiTabs-indicator": {
                bgcolor: theme.palette.error.main,
              },
            }}
          >
            <Tab label="Received Inventory" {...a11yProps(0)} />
            <Tab label="Distribution Inventory" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {state.loading ? <BackDrop /> : <InventoryTable data={state.data} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </div>
  );
}
