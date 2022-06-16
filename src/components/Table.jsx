import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Table = ({ Userlist, ItemShowed, setUserListAfterSearch, userListAfterSearch }) => {
  const [searchInput, SetSearchInput] = useState("");
  const [activeColumn, SetActiveColumn] = useState("");
  const [ascSort, SetAscSort] = useState(false);

  const ascentFirstName = () => {
    Userlist.sort((a, b) => a.firstName.localeCompare(b.firstName));
  };
  const descentFirstName = () => {
    Userlist.sort((a, b) => b.firstName.localeCompare(a.firstName));
  };
  const firstNameSort = () => {
    SetActiveColumn("First Name");
    SetAscSort(true);
    ascSort === true ? ascentFirstName() : descentFirstName();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentLastName = () => {
    Userlist.sort((a, b) => a.lastName.localeCompare(b.lastName));
  };
  const descentLastName = () => {
    Userlist.sort((a, b) => b.lastName.localeCompare(a.lastName));
  };
  const lastNameSort = () => {
    SetActiveColumn("Last Name");
    SetAscSort(true);
    ascSort === true ? ascentLastName() : descentLastName();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentStartDate = () => {
    Userlist.sort((a, b) => Number(new Date(b.startDate)) - Number(new Date(a.startDate)));
  };
  const descentStartDate = () => {
    Userlist.sort((a, b) => Number(new Date(a.startDate)) - Number(new Date(b.startDate)));
  };
  const startDateSort = () => {
    SetActiveColumn("Start Date");
    SetAscSort(true);
    ascSort === true ? ascentStartDate() : descentStartDate();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentDepartment = () => {
    Userlist.sort((a, b) => a.department.name.localeCompare(b.department.name));
  };
  const descentDepartment = () => {
    Userlist.sort((a, b) => b.department.name.localeCompare(a.department.name));
  };
  const departmentSort = () => {
    SetActiveColumn("Department");
    SetAscSort(true);
    ascSort === true ? ascentDepartment() : descentDepartment();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentBirthDate = () => {
    Userlist.sort((a, b) => Number(new Date(b.dateOfBirth)) - Number(new Date(a.dateOfBirth)));
  };

  const descentBirthDate = () => {
    Userlist.sort((a, b) => Number(new Date(a.dateOfBirth)) - Number(new Date(b.dateOfBirth)));
  };
  const birthDateSort = () => {
    SetActiveColumn("Date of Birth");
    SetAscSort(true);
    ascSort === true ? ascentBirthDate() : descentBirthDate();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentStreet = () => {
    Userlist.sort((a, b) => a.street.localeCompare(b.street));
  };
  const descentStreet = () => {
    Userlist.sort((a, b) => b.street.localeCompare(a.street));
  };
  const streetSort = () => {
    SetActiveColumn("Street");
    SetAscSort(true);
    ascSort === true ? ascentStreet() : descentStreet();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentCity = () => {
    Userlist.sort((a, b) => a.city.localeCompare(b.city));
  };
  const descentCity = () => {
    Userlist.sort((a, b) => b.city.localeCompare(a.city));
  };
  const citySort = () => {
    SetActiveColumn("City");
    SetAscSort(true);
    ascSort === true ? ascentCity() : descentCity();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

  const ascentState = () => {
    Userlist.sort((a, b) => a.state.name.localeCompare(b.state.name));
  };
  const descentState = () => {
    Userlist.sort((a, b) => b.state.name.localeCompare(a.state.name));
  };
  const stateSort = () => {
    SetActiveColumn("State");
    SetAscSort(true);
    ascSort === true ? ascentState() : descentState();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };
  const ascentZipCode = () => {
    Userlist.sort((a, b) => a.zipCode.localeCompare(b.zipCode));
  };
  const descentZipCode = () => {
    Userlist.sort((a, b) => b.zipCode.localeCompare(a.zipCode));
  };
  const zipCodeSort = () => {
    SetActiveColumn("zipCode");
    SetAscSort(true);
    ascSort === true ? ascentZipCode() : descentZipCode();
    ascSort === true ? SetAscSort(false) : SetAscSort(true);
  };

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
    if (ascSort === true) {
      setUserListAfterSearch(FilteredUserList);
    }
    setUserListAfterSearch(FilteredUserList);
  }, [Userlist, searchInput, setUserListAfterSearch, ascSort]);

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
            <th>
              <div
                className="cell"
                onClick={() => {
                  firstNameSort();
                }}>
                First Name
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "First Name" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "First Name"
                        ? "icon-down"
                        : ascSort === true
                        ? "icon-down-blue"
                        : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  lastNameSort();
                }}>
                Last Name
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Last Name" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Last Name"
                        ? "icon-down"
                        : ascSort === true
                        ? "icon-down-blue"
                        : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  startDateSort();
                }}>
                Start Date
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Start Date" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Start Date"
                        ? "icon-down"
                        : ascSort === true
                        ? "icon-down-blue"
                        : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  departmentSort();
                }}>
                Department
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Department" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Department"
                        ? "icon-down"
                        : ascSort === true
                        ? "icon-down-blue"
                        : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  birthDateSort();
                }}>
                Date of Birth
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Date of Birth" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Date of Birth"
                        ? "icon-down"
                        : ascSort === true
                        ? "icon-down-blue"
                        : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  streetSort();
                }}>
                Street
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Street" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "Street" ? "icon-down" : ascSort === true ? "icon-down-blue" : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  citySort();
                }}>
                City
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "City" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "City" ? "icon-down" : ascSort === true ? "icon-down-blue" : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
            <th>
              <div
                className="cell"
                onClick={() => {
                  stateSort();
                }}>
                State
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "State" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "State" ? "icon-down" : ascSort === true ? "icon-down-blue" : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>

            <th>
              <div
                className="cell"
                onClick={() => {
                  zipCodeSort();
                }}>
                Zip Code
                <div className="icon-container">
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "zipCode" ? "icon-up" : ascSort === true ? "icon-up-white" : "icon-up-blue"
                    }
                    icon={faCaretUp}
                  />
                  <FontAwesomeIcon
                    className={
                      activeColumn !== "zipCode" ? "icon-down" : ascSort === true ? "icon-down-blue" : "icon-down-white"
                    }
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </th>
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
                <td className={activeColumn === "First Name" ? "grey" : ""}>{user.firstName}</td>
                <td className={activeColumn === "Last Name" ? "grey" : ""}>{user.lastName}</td>
                <td className={activeColumn === "Start Date" ? "grey" : ""}>{user.startDate}</td>
                <td className={activeColumn === "Department" ? "grey" : ""}>{user.department.name}</td>
                <td className={activeColumn === "Date Of Birth" ? "grey" : ""}>{user.dateOfBirth}</td>
                <td className={activeColumn === "Street" ? "grey" : ""}>{user.street}</td>
                <td className={activeColumn === "City" ? "grey" : ""}>{user.city}</td>
                <td className={activeColumn === "State" ? "grey" : ""}>{user.state.abbreviation}</td>
                <td className={activeColumn === "zipCode" ? "grey" : ""}>{user.zipCode}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
