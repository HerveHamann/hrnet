import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({ title, type, setSelected, selectedItem }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const ref = useRef(null);

  const handleCLickOutside = (e) => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };
  document.addEventListener("mousedown", handleCLickOutside);

  const SaveSelection = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <div>
      <div className="select-title">{title}</div>
      <div
        ref={ref}
        className="dropdown"
        onClick={() => (openDropDown ? setOpenDropDown(false) : setOpenDropDown(true))}>
        <div className="dropdown-select">
          <span className="select">{selectedItem} </span>
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </div>
        <div className={openDropDown ? "dropdown-list" : "hidden"}>
          {type.map((item) => (
            <div className="dropdown-item" onClick={(e) => SaveSelection(e)} key={item.name}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
