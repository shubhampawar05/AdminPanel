import React from "react";
import "./style.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../dataTablesSources";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      // heigth: 50,
      
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewAction">Edit</div>
            <div className="deletAction">Delet</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
