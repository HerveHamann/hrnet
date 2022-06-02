import React, { useState } from "react";

const Table = ({ Userlist, ItemShowed }) => {
  const [searchInput, SetSearchInput] = useState("");
  // console.log(Userlist);
  // console.log(ItemShowed);

  let FilteredUserList = ItemShowed.filter(
    (user) =>
      user.firstName.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.lastName.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.dateOfBirth.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.startDate.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.department.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.street.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.city.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.state.abbreviation.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
      user.zipCode.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  return (
    <div className="component-container">
      <div className="search-field">
        <span>Search:</span>
        <input
          type="search"
          onChange={(e) => {
            SetSearchInput(e.target.value);
          }}
        />
      </div>
      <table>
        <tbody>
          <tr className="column-title">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
          {ItemShowed.length === 0 ? (
            <tr className="column no-results column-pair">
              <td colSpan={9}>No data aviable in table</td>
            </tr>
          ) : (
            ""
          )}
          {FilteredUserList.length === 0 && ItemShowed.length !== 0 ? (
            <tr className="column no-results column-pair">
              <td colSpan={9}>No matching records found</td>
            </tr>
          ) : (
            FilteredUserList.map((user, index) => (
              <tr className={index % 2 === 0 ? "column column-pair" : "column column-impair"} key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.startDate}</td>
                <td>{user.department.name}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.street}</td>
                <td>{user.city}</td>
                <td>{user.state.abbreviation}</td>
                <td>{user.zipCode}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
