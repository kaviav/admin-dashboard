import React from "react";
import { Topbar } from "./components/tobar/Topbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./app.css";

export const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">otherpages</div>
      </div>
    </div>
  );
};
