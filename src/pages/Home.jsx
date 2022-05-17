import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../DataContext";
const Home = () => {
  const data = useContext(DataContext);
  const { User, setUser } = data;

  console.log(User);
  return (
    <div className="home">
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

            <label hmtlfor="state">State</label>
            <select onChange={(e) => setUser({ ...User, state: e.target.value })} name="state" id="state"></select>

            <label hmtlfor="zip-code">Zip Code</label>
            <input onChange={(e) => setUser({ ...User, zipCode: e.target.value })} id="zip-code" type="number" />
          </fieldset>

          <label hmtlfor="department">Department</label>
          <select onChange={(e) => setUser({ ...User, department: e.target.value })} name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button>Save</button>
      </div>
    </div>
  );
};

export default Home;
