import React from "react";
import { Topbar } from "./components/tobar/Topbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";

export const App = () => {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
