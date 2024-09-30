import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./data";
import Header from "../Header/Header";

const ContactInfo = () => {
  return (
    <>
      <Box>
        <Header title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"} />
        <Box sx={{ height: 600, mx: "auto" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ContactInfo;
