import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { NavLink } from "react-router-dom";
const EmployeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;

  console.log(UserList);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeList;
