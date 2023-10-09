import React from "react";
import { Topbar } from "./components/tobar/Topbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { Product } from "./pages/product/Product";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { NewProduct } from "./pages/newProduct/NewProduct";
import { Login } from "./pages/login/Login";

export const App = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              admin && (
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/user/:id" element={<User />} />
                      <Route path="/product/:id" element={<Product />} />
                      <Route path="/productList" element={<ProductList />} />
                      <Route path="/newUser" element={<NewUser />} />

                      <Route path="/newProduct" element={<NewProduct />} />
                    </Routes>
                  </div>
                </>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
