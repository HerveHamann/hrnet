import React from "react";

const Table = ({ Userlist }) => {
  console.log(Userlist);
  return (
    <div>
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
          {Userlist.map((user, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
