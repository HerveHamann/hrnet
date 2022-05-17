import React from "react";
import { NavLink } from "react-router-dom";
const EmployeList = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeList;
