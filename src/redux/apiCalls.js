import { loginStart, loginSucces, loginFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { userRequest } from "../requestMethods";

import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import {
  addClientFailure,
  addClientStart,
  addClientSuccess,
  deleteClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  getClientFailure,
  getClientStart,
  getClientSuccess,
  updateClientFailure,
  updateClientStart,
  updateClientSuccess,
} from "./clientRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

// export const logout = async (dispatch, user) => {
//   dispatch(logoutUser());
// };

//PRODUCTS

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product/getall");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/product/delete/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    //update
    dispatch(updateProductSuccess({ id, product })); // updateProductSuccess({id:id,product:product})
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product/add`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//CLIENTS

export const getClients = async (dispatch) => {
  dispatch(getClientStart());
  try {
    const res = await userRequest.get("/user/getall");
    dispatch(getClientSuccess(res.data));
  } catch (err) {
    dispatch(getClientFailure());
  }
};

export const deleteClient = async (id, dispatch) => {
  dispatch(deleteClientStart());
  try {
    await userRequest.delete(`/user/delete/${id}`);
    dispatch(deleteClientSuccess(id));
  } catch (err) {
    dispatch(deleteClientFailure());
  }
};

export const updateClient = async (id, client, dispatch) => {
  dispatch(updateClientStart());
  try {
    //update
    dispatch(updateClientSuccess({ id, client })); // updateClientSuccess({id:id,client:client})
  } catch (err) {
    dispatch(updateClientFailure());
  }
};

export const addClient = async (client, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await userRequest.post(`/auth/signup`, client);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
};
