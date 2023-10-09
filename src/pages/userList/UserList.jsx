import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined } from "@mui/icons-material";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, getClients } from "../../redux/apiCalls";

export const UserList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.client.clients); // check redux dev tools tree
  console.log(clients);
  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteClient(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 330 }, // redux toolkit check in tht _id, so id changed to _id
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" alt="" src={params.row.image} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    // {
    //   field: "transaction",
    //   headerName: "Transaction",
    //   width: 120,
    // },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 90,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
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
        rows={clients} // instead of data, products given
        columns={columns}
        getRowId={(row) => row._id} // his also added after redux integration
        pageSize={19}
        checkboxSelection
      />
    </div>
  );
};
