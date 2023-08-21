import React from "react";
import { Topbar } from "./components/tobar/Topbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./app.css";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};
