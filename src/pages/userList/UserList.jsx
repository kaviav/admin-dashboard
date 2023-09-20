import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" alt="" src={params.row.avatar} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableRowSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={19}
        checkboxSelection
      />
    </div>
  );
};
