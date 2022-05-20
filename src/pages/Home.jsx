import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { NavLink } from "react-router-dom";
import Select from "../components/Select";
import Modal from "../components/Modal";
import { states, departement } from "../assets/SelectContent";
const Home = () => {
  const data = useContext(DataContext);
  const { UserList, setUserList } = data;

  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [ModalShowed, setModalShowed] = useState(false);

  const onClick = () => {
    setUserList(UserList.concat(User));
    setModalShowed(true);
  };

  console.log(User);
  return (
    <div className="home">
      {ModalShowed ? <Modal setModalShowed={setModalShowed} /> : ""}
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to={"/employe-list"}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label hmtlfor="first-name">First Name</label>
          <input onChange={(e) => setUser({ ...User, firstName: e.target.value })} type="text" id="first-name" />

          <label hmtlfor="last-name">Last Name</label>
          <input onChange={(e) => setUser({ ...User, lastName: e.target.value })} type="text" id="last-name" />

          <label hmtlfor="date-of-birth">Date of Birth</label>
          <input onChange={(e) => setUser({ ...User, dateOfBirth: e.target.value })} id="date-of-birth" type="text" />

          <label hmtlfor="start-date">Start Date</label>
          <input onChange={(e) => setUser({ ...User, startDate: e.target.value })} id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label hmtlfor="street">Street</label>
            <input onChange={(e) => setUser({ ...User, street: e.target.value })} id="street" type="text" />

            <label hmtlfor="city">City</label>
            <input onChange={(e) => setUser({ ...User, city: e.target.value })} id="city" type="text" />

            <Select title="States" type={states} setUser={setUser} User={User} />

            <label hmtlfor="zip-code">Zip Code</label>
            <input onChange={(e) => setUser({ ...User, zipCode: e.target.value })} id="zip-code" type="number" />
          </fieldset>

          <Select title="Department" type={departement} setUser={setUser} User={User} />
        </form>

        <button
          onClick={() => {
            onClick();
          }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Home;
