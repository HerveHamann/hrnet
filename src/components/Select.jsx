import React from "react";

const Select = ({ title, type, setUser, User }) => {
  const onChange = (e) => {
    if (title === "States") setUser({ ...User, state: e.target.value });
    if (title === "Departement") setUser({ ...User, department: e.target.value });
  };

  return (
    <div>
      <label hmtlfor="type">{title}</label>
      <select
        onChange={(e) => {
          onChange(e);
        }}
        name="type"
        id="type">
        {type.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
