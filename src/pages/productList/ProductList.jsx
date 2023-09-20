import "./productList.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // check redux dev tools tree

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 }, // redux toolkit check in tht _id, so id changed to _id
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id} className="link">
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)} // changed to _id
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products} // instead of dat products given
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id} // his also added after redux integration
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};
