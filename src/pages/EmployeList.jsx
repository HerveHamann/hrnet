import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Select from "../components/Select";
import { entries } from "../assets/SelectContent";
const EmployeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div className="custom-field">
        <div className="entries-selector">
          <span>Show</span>
          <Select type={entries} />

          <span>entries</span>
        </div>
      </div>
      <Table Userlist={UserList} />

      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeList;
