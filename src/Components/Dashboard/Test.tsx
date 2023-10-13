import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, sortable: false },
  { field: "firstName", headerName: "First name", width: 130, editable: true },
  { field: "lastName", headerName: "Last name", width: 130, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const [selectedRow, setSelectedRow] = React.useState([]);
  const [contextMenu, setContextMenu] = React.useState(null);

  // select row id
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const handleContextMenu = (event: any) => {
    event.preventDefault();
    setSelectedRow([Number(event?.currentTarget.getAttribute("data-id"))]);
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null
    );
  };

  const handleClose = () => {
    // contextMenu 그냥 닫을 때
    setContextMenu(null);
  };

  const diagnosis = () => {
    // 진료시작
    if (rowSelectionModel.length === 0) {
      console.log(selectedRow);
    } else {
      console.log(rowSelectionModel);
    }
  };

  const changeDiagnosis = () => {
    // 진료 대기로 변경
    console.log(selectedRow);
  };

  const changeDoctor = () => {
    // 의사 변경
    console.log(selectedRow);
  };

  const cancleDiagnosis = () => {
    // 진료 취소
    console.log(selectedRow);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        componentsProps={{
          row: {
            onContextMenu: handleContextMenu,
            style: { cursor: "context-menu" },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
      />

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        componentsProps={{
          root: {
            onContextMenu: (e) => {
              e.preventDefault();
              handleClose();
            },
          },
        }}
      >
        <MenuItem onClick={diagnosis}>Edit</MenuItem>
        <MenuItem onClick={changeDiagnosis}>Delete</MenuItem>
        <MenuItem onClick={changeDoctor}>Hello</MenuItem>
        <MenuItem onClick={cancleDiagnosis}>Change Api</MenuItem>
      </Menu>
    </div>
  );
}
