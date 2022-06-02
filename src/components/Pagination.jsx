import React, { useState, useEffect } from "react";

const Pagination = ({ selectedItemByPage, Userlist, setItemShowed }) => {
  // console.log(selectedItemByPage);

  let numberOfPages = Math.ceil(Userlist.length / selectedItemByPage);
  // console.log(numberOfPages);

  let ArrayOfPages = [...Array(numberOfPages).keys()];
  // console.log(ArrayOfPages);

  const [offSet, SetOffSet] = useState(0);

  console.log(Userlist);
  console.log(offSet);

  useEffect(() => {
    //On utilise Math.floor car si si par ex: 95/25
    //On obtient 3,6: si on fait Math.ceil => 4 ça nous amène a la page d'après qui existe pas (si on est fin de tableau)
    //On utilise donc Math.floor car 3.6 veut dire : l'élément est sur la page 3 et .6 veut dire à 60% de la page
    let positionOnPage = Math.floor(offSet / selectedItemByPage);
    console.log(positionOnPage);
    console.log(selectedItemByPage);
    let NewNumberOfPages = Math.ceil(Userlist.length / selectedItemByPage);
    console.log(NewNumberOfPages);
    let NewArrayOfPages = [...Array(NewNumberOfPages).keys()];
    console.log(NewArrayOfPages);
    let newPageSelected = NewArrayOfPages.find((page) => page === positionOnPage);
    console.log(newPageSelected);

    setItemShowed(Userlist.slice(newPageSelected * selectedItemByPage, (newPageSelected + 1) * selectedItemByPage));
  }, [setItemShowed, selectedItemByPage, Userlist, offSet]);

  //version light qui semble marcher aussi!

  // useEffect(() => {
  //   let positionOnPage = Math.floor(offSet / selectedItemByPage);
  //   console.log(positionOnPage);
  //   setItemShowed(Userlist.slice(positionOnPage * selectedItemByPage, (positionOnPage + 1) * selectedItemByPage));
  // }, [setItemShowed, selectedItemByPage, Userlist, offSet]);

  return (
    <div>
      {ArrayOfPages.map((page, index) => (
        <button
          className="pagination-button"
          key={index}
          onFocus
          onClick={() => {
            SetOffSet(page * selectedItemByPage);
            setItemShowed(Userlist.slice(page * selectedItemByPage, (page + 1) * selectedItemByPage));
          }}>
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
