import "./App.css";

//  react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// date fns
import DateAdapter from "@mui/lab/AdapterDateFns";

// mui
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// mui theme
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";

// ___________________________
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReceivedInventory from "./pages/ReceivedInventory";
import PageNotFound from "./pages/NotFound";
import Layout from "./components/layout";
import InventoryManagement from "./pages/InventoryManagement";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route index path="/login" element={<Login />} />
              <Route
                path=""
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="received-inventory"
                element={
                  <Layout>
                    <ReceivedInventory />
                  </Layout>
                }
              />
              <Route
                path="inventory-management"
                element={
                  <Layout>
                    <InventoryManagement />
                  </Layout>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
