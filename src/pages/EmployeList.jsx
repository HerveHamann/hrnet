import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Select from "../components/Select";
import { entries } from "../assets/SelectContent";
import Pagination from "../components/Pagination";

const EmployeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;
  const [selectedItemByPage, setSelectedItemByPage] = useState(entries[0].name);
  const [ItemShowed, setItemShowed] = useState([]);
  const [userListAfterSearch, setUserListAfterSearch] = useState([]);

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
        <Table
          Userlist={UserList}
          ItemShowed={ItemShowed}
          setUserListAfterSearch={setUserListAfterSearch}
          userListAfterSearch={userListAfterSearch}
        />
        <Pagination
          selectedItemByPage={selectedItemByPage}
          Userlist={UserList}
          userListAfterSearch={userListAfterSearch}
          setItemShowed={setItemShowed}
        />
      </div>

      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeList;
