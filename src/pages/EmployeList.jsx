import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Select from "../components/Select";
import { entries } from "../assets/SelectContent";
const EmployeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;
  const [selectedItemByPage, setSelectedItemByPage] = useState(entries[0].name);

  console.log(selectedItemByPage);

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div className="custom-field">
        <div className="entries-selector">
          <span>Show</span>
          <Select
            classSet={"table-dropdown"}
            type={entries}
            selectedItem={selectedItemByPage}
            setSelected={setSelectedItemByPage}
          />

          <span>entries</span>
        </div>
      </div>
      <Table Userlist={UserList} />

      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeList;
