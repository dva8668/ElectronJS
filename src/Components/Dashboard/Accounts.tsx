import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

interface Data {
  stt: number;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  commentsKarma: number;
  postsKarma: number;
  totalKarma: number;
  NSFW: boolean;
  userAgent: string;
  status: StatusType;
  createdAt: string;
  lastRun: string;
  logs: string;
}

enum StatusType {
  "LIVE",
  "SUSPENDED",
  "INCORRECT_PASSWORD",
  "SHADOW_BANNED",
}

function createData(
  stt: number,
  username: string,
  password: string,
  email: string,
  emailVerified: boolean,
  commentsKarma: number,
  postsKarma: number,
  totalKarma: number,
  NSFW: boolean,
  userAgent: string,
  status: StatusType,
  createdAt: string,
  lastRun: string,
  logs: string
): Data {
  return {
    stt,
    username,
    password,
    email,
    emailVerified,
    commentsKarma,
    postsKarma,
    totalKarma,
    NSFW,
    userAgent,
    status,
    createdAt,
    lastRun,
    logs,
  };
}

const rows = [
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
  createData(
    1,
    "dev.vietanh",
    "password",
    "dev.vietanh@gmail.com",
    true,
    10,
    20,
    30,
    false,
    "hello",
    "LIVE",
    "createdAt createdAt",
    "lastRun",
    "logs hello world"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  customWidth: number;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "stt",
    numeric: false,
    customWidth: 60,
    label: "#STT",
  },
  {
    id: "username",
    numeric: false,
    customWidth: 100,
    label: "Username",
  },
  {
    id: "password",
    numeric: false,
    customWidth: 100,
    label: "Password",
  },
  {
    id: "email",
    numeric: false,
    customWidth: 200,
    label: "Email",
  },
  {
    id: "emailVerified",
    numeric: false,
    customWidth: 80,
    label: "Verified",
  },
  {
    id: "commentsKarma",
    numeric: false,
    customWidth: 100,
    label: "Comments",
  },
  {
    id: "postsKarma",
    numeric: false,
    customWidth: 100,
    label: "Post",
  },
  {
    id: "totalKarma",
    numeric: false,
    customWidth: 100,
    label: "Karma",
  },
  {
    id: "NSFW",
    numeric: false,
    customWidth: 100,
    label: "NSFW",
  },
  {
    id: "userAgent",
    numeric: false,
    customWidth: 100,
    label: "User-agent",
  },
  {
    id: "status",
    numeric: false,
    customWidth: 100,
    label: "Status",
  },
  {
    id: "createdAt",
    numeric: false,
    customWidth: 100,
    label: "createdAt",
  },
  {
    id: "lastRun",
    numeric: false,
    customWidth: 100,
    label: "Last Run",
  },
  {
    id: "logs",
    numeric: false,
    customWidth: 100,
    label: "Logs",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontWeight: "bold",
              maxWidth: `${headCell.customWidth}px`,
              backgroundColor: "#f5f5f5",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Accounts() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("stt");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.username);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const handleContextMenu = (event: any, index: number) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            top: event.clientY - 6,
            left: event.clientX + 2,
            index,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {!!contextMenu?.top && (
          <LongMenu
            anchorPosition={{ top: contextMenu.top, left: contextMenu.left }}
            options={options}
            handleClose={() => setContextMenu(null)}
            index={contextMenu?.index}
          />
        )}
        <TableContainer sx={{ maxHeight: "calc(100vh - 300px)" }}>
          <Table stickyHeader aria-labelledby="sticky table">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row?.username);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event: any) => handleClick(event, row?.username)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.username}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                    onContextMenu={(e) => {
                      handleContextMenu(event, index);
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {row.stt}
                    </TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row.password}</TableCell>
                    <TableCell
                      sx={{
                        display: "inline-block",
                        maxWidth: "100px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      align="center"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell align="center">
                      {row.emailVerified.toString()}
                    </TableCell>
                    <TableCell align="center">{row.commentsKarma}</TableCell>
                    <TableCell align="center">{row.postsKarma}</TableCell>
                    <TableCell align="center">{row.totalKarma}</TableCell>
                    <TableCell align="center">{row.NSFW.toString()}</TableCell>
                    <TableCell align="center">{row.userAgent}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.createdAt}</TableCell>
                    <TableCell align="center">{row.lastRun}</TableCell>
                    <TableCell align="center">{row.logs}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
