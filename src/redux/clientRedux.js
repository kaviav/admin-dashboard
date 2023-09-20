import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    clients: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients = action.payload;
    },
    getClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE

    deleteClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients.splice(
        state.clients.findIndex((item) => item._id === action.payload),
        1
      );
    },

    deleteClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE
    updateClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateClientSuccess: (state, action) => {
      // Set isFetching to false since the operation is complete
      state.isFetching = false;

      // Find the index of the client with the matching _id in the clients array
      const clientIndex = state.clients.findIndex(
        (item) => item._id === action.payload.id
      );

      // Use the index to replace the old client with the updated client
      // This is done by assigning the new client (action.payload.client) to the clients array at the specified index
      state.clients[clientIndex] = action.payload.client;
    },
    updateClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD NEW CLIENT

    addClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients.push(action.payload);
    },
    addClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getClientStart,
  getClientSuccess,
  getClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  deleteClientFailure,
  updateClientStart,
  updateClientSuccess,
  updateClientFailure,
  addClientStart,
  addClientSuccess,
  addClientFailure,
} = clientSlice.actions;

export default clientSlice.reducer;

// getClientStart, getClientSuccess, getClientFailure: These reducers handle the state changes for fetching clients. getClientStart sets isFetching to true, indicating that a request is in progress. getClientSuccess updates the state with the fetched clientss and sets isFetching to false.
