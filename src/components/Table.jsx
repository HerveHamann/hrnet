import React, { useState, useEffect } from "react";

const Table = ({ Userlist, ItemShowed, setUserListAfterSearch, userListAfterSearch }) => {
  const [searchInput, SetSearchInput] = useState("");
  // console.log(Userlist);
  // console.log(ItemShowed);

  useEffect(() => {
    let FilteredUserList = Userlist.filter(
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
    setUserListAfterSearch(FilteredUserList);
  }, [Userlist, searchInput, setUserListAfterSearch]);

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
          {Userlist.length === 0 ? (
            <tr className="column no-results column-pair">
              <td colSpan={9}>No data aviable in table</td>
            </tr>
          ) : (
            ""
          )}
          {userListAfterSearch.length === 0 && Userlist.length !== 0 ? (
            <tr className="column no-results column-pair">
              <td colSpan={9}>No matching records found</td>
            </tr>
          ) : (
            ItemShowed.map((user, index) => (
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
