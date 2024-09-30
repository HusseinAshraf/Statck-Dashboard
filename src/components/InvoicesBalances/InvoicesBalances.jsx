import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./data";
import Header from "../Header/Header";
const InvoicesBalances = () => {
  return (
    <>
      <Box>
        <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
        <Box sx={{ height: 600, mx: "auto" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            checkboxSelection
          />
        </Box>
      </Box>
    </>
  );
};

export default InvoicesBalances;
