// import React from "react";

// import Select from "../components/Select";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretLeft, faCaretRight, faHouse } from "@fortawesome/free-solid-svg-icons";

// const CalendarHearder = ({
//   month,
//   year,
//   setSelectedDay,
//   selectedMonth,
//   setSelectedMonth,
//   selectedYear,
//   setSelectedYear,
//   setInput,
//   monthNumber,
//   selectedDayWithZero,
// }) => {
//   const OnClickPrevious = () => {
//     if (selectedMonth !== month[0].name) {
//       let itemName = month.find((item) => item.name === selectedMonth);
//       let itemIndex = month.indexOf(itemName);
//       setSelectedMonth(month[itemIndex - 1].name);
//     }
//     if (selectedMonth === month[0].name) {
//       setSelectedMonth(month[month.length - 1].name);
//       let itemName = year.find((item) => item === selectedYear);
//       let itemIndex = year.indexOf(itemName);
//       selectedYear !== year[0] ? setSelectedYear(year[itemIndex - 1]) : setSelectedYear(year[0]);
//     }
//   };
//   const OnClickNext = () => {
//     if (selectedMonth !== month[month.length - 1].name) {
//       let itemName = month.find((item) => item.name === selectedMonth);
//       let itemIndex = month.indexOf(itemName);
//       setSelectedMonth(month[itemIndex + 1].name);
//     }
//     if (selectedMonth === month[month.length - 1].name) {
//       setSelectedMonth(month[0].name);
//       let itemName = year.find((item) => item === selectedYear);
//       let itemIndex = year.indexOf(itemName);
//       selectedYear !== year[year.length - 1]
//         ? setSelectedYear(year[itemIndex + 1])
//         : setSelectedYear(year[year.length - 1]);
//     }
//   };

//   const OnClickHouse = () => {
//     setSelectedMonth(month[new Date(Date.now()).getMonth()].name);
//     setSelectedYear(new Date(Date.now()).getFullYear());
//     setSelectedDay(new Date(Date.now()).getDate());
//     setInput(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`);
//   };
//   return (
//     <div className="header-container">
//       <FontAwesomeIcon
//         className="arrow"
//         icon={faCaretLeft}
//         onClick={() => {
//           OnClickPrevious();
//         }}
//       />
//       <FontAwesomeIcon
//         className="house"
//         icon={faHouse}
//         onClick={() => {
//           OnClickHouse();
//         }}
//       />
//       <Select classSet={"picker-dropdown"} type={month} selectedItem={selectedMonth} setSelected={setSelectedMonth} />
//       <Select classSet={"picker-dropdown"} type={year} selectedItem={selectedYear} setSelected={setSelectedYear} />
//       <FontAwesomeIcon
//         className="arrow"
//         icon={faCaretRight}
//         onClick={() => {
//           OnClickNext();
//         }}
//       />
//     </div>
//   );
// };

// export default CalendarHearder;
