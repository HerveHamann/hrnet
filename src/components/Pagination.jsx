import React, { useState, useEffect } from "react";

const Pagination = ({ selectedItemByPage, Userlist, setItemShowed, userListAfterSearch }) => {
  // console.log(selectedItemByPage);

  let numberOfPages = Math.ceil(userListAfterSearch.length / selectedItemByPage);
  // console.log(numberOfPages);

  let ArrayOfPages = [...Array(numberOfPages).keys()];
  // console.log(ArrayOfPages);

  const [offSet, SetOffSet] = useState(0);

  const [Page, SetPage] = useState(0);
  console.log(Page);
  // console.log(userListAfterSearch);
  console.log(offSet);

  useEffect(() => {
    if (userListAfterSearch.length !== Userlist.length) {
      SetOffSet(0);
    }
  }, [userListAfterSearch.length, Userlist.length]);

  useEffect(() => {
    //On utilise Math.floor car : si par ex: 95/25
    //On obtient 3,6: si on fait Math.ceil => 4 ça nous amène a la page d'après qui existe pas (si on est fin de tableau)
    //On utilise donc Math.floor car 3.6 veut dire : l'élément est sur la page 3 et .6 veut dire à 60% de la page

    let positionOnPage = Math.floor(offSet / selectedItemByPage);

    // console.log(selectedItemByPage);
    let NewNumberOfPages = Math.ceil(userListAfterSearch.length / selectedItemByPage);
    // console.log(NewNumberOfPages);
    let NewArrayOfPages = [...Array(NewNumberOfPages).keys()];
    // console.log(NewArrayOfPages);
    let newPageSelected = NewArrayOfPages.find((page) => page === positionOnPage);
    // console.log(newPageSelected);

    SetPage(positionOnPage);
    setItemShowed(
      userListAfterSearch.slice(newPageSelected * selectedItemByPage, (newPageSelected + 1) * selectedItemByPage)
    );
  }, [setItemShowed, selectedItemByPage, userListAfterSearch, offSet, Userlist.length]);

  //version light qui semble marcher aussi!

  // useEffect(() => {
  //   let positionOnPage = Math.floor(offSet / selectedItemByPage);
  //   console.log(positionOnPage);

  //   SetPage(positionOnPage);
  //   setItemShowed(
  //     userListAfterSearch.slice(positionOnPage * selectedItemByPage, (positionOnPage + 1) * selectedItemByPage)
  //   );
  // }, [setItemShowed, selectedItemByPage, userListAfterSearch, offSet]);

  return (
    <div className="pagination">
      <div className="info">
        {userListAfterSearch.length !== 0 ? (
          <div>
            Showing {Page * selectedItemByPage + 1} to{" "}
            {userListAfterSearch.length <= (Page + 1) * selectedItemByPage
              ? userListAfterSearch.length
              : (Page + 1) * selectedItemByPage}{" "}
            of {userListAfterSearch.length} entries
          </div>
        ) : (
          <div>Showing 0 to 0 of 0 entries(filtered from {Userlist.length} total entries)</div>
        )}
      </div>
      <div className="button-container">
        <button
          className={Page === 0 ? "prevnext-button-disabled" : "prevnext-button"}
          onClick={
            Page !== 0
              ? () => {
                  SetOffSet((Page - 1) * selectedItemByPage);
                  SetPage(Page - 1);
                }
              : () => {}
          }>
          Previous
        </button>

        {
          ArrayOfPages.length <= 8 ? (
            ArrayOfPages.map((page, index) => (
              <button
                className={Page === page ? "pagination-button-focus" : "pagination-button"}
                key={index}
                onClick={() => {
                  SetOffSet(page * selectedItemByPage);
                  SetPage(page);
                }}>
                {page + 1}
              </button>
            ))
          ) : Page <= 4 ? (
            <div>
              {ArrayOfPages.slice(0, 5).map((page, index) => (
                <button
                  className={Page === page ? "pagination-button-focus" : "pagination-button"}
                  key={index}
                  onClick={() => {
                    SetOffSet(page * selectedItemByPage);
                    SetPage(page);
                  }}>
                  {page + 1}
                </button>
              ))}

              {"..."}
              <button
                className={
                  Page === ArrayOfPages[ArrayOfPages.length - 1] ? "pagination-button-focus" : "pagination-button"
                }
                onClick={() => {
                  SetOffSet([ArrayOfPages.length - 1] * selectedItemByPage);
                  SetPage([ArrayOfPages.length - 1]);
                }}>
                {[ArrayOfPages.length]}
              </button>
            </div>
          ) : Page > 4 && Page <= ArrayOfPages.length - 4 ? (
            <div>
              <button
                className={Page === ArrayOfPages[0] ? "pagination-button-focus" : "pagination-button"}
                onClick={() => {
                  SetOffSet(ArrayOfPages[0] * selectedItemByPage);
                  SetPage(ArrayOfPages[0]);
                }}>
                {ArrayOfPages[0] + 1}
              </button>
              {"..."}
              {ArrayOfPages.slice(Page - 1, Page + 2).map((page, index) => (
                <button
                  className={Page === page ? "pagination-button-focus" : "pagination-button"}
                  key={index}
                  onClick={() => {
                    SetOffSet(page * selectedItemByPage);
                    SetPage(page);
                  }}>
                  {page + 1}
                </button>
              ))}
              {"..."}
              <button
                className={
                  Page === ArrayOfPages[ArrayOfPages.length - 1] ? "pagination-button-focus" : "pagination-button"
                }
                onClick={() => {
                  SetOffSet([ArrayOfPages.length - 1] * selectedItemByPage);
                  SetPage([ArrayOfPages.length - 1]);
                }}>
                {[ArrayOfPages.length]}
              </button>
            </div>
          ) : Page > ArrayOfPages.length - 4 ? (
            <div>
              <button
                className={Page === ArrayOfPages[0] ? "pagination-button-focus" : "pagination-button"}
                onClick={() => {
                  SetOffSet(ArrayOfPages[0] * selectedItemByPage);
                  SetPage(ArrayOfPages[0]);
                }}>
                {ArrayOfPages[0] + 1}
              </button>
              {"..."}
              {ArrayOfPages.slice(ArrayOfPages.length - 5, ArrayOfPages.length).map((page, index) => (
                <button
                  className={Page === page ? "pagination-button-focus" : "pagination-button"}
                  key={index}
                  onClick={() => {
                    SetOffSet(page * selectedItemByPage);
                    SetPage(page);
                  }}>
                  {page + 1}
                </button>
              ))}
            </div>
          ) : (
            " "
          )
          // <div>
          //   {ArrayOfPages.slice(0, 5).map((page, index) => (
          //     <button
          //       className={Page === page ? "pagination-button-focus" : "pagination-button"}
          //       key={index}
          //       onClick={() => {
          //         SetOffSet(page * selectedItemByPage);
          //         SetPage(page);
          //       }}>
          //       {page + 1}
          //     </button>
          //   ))}

          //   {"..."}
          //   <button
          //       className={
          //         Page === ArrayOfPages[ArrayOfPages.length - 1] ? "pagination-button-focus" : "pagination-button"
          //       }
          //       onClick={() => {
          //         SetOffSet([ArrayOfPages.length - 1] * selectedItemByPage);
          //         SetPage([ArrayOfPages.length - 1]);
          //       }}>
          //       {[ArrayOfPages.length]}
          //     </button>
          // </div>
        }

        {/* 
        {ArrayOfPages.map((page, index) => (
          <button
            className={Page === page ? "pagination-button-focus" : "pagination-button"}
            key={index}
            onClick={() => {
              SetOffSet(page * selectedItemByPage);
              SetPage(page);
              //A DEMANDER mais: vu que je change OffSet et Page, l'UseEffect se joue donc pas besoin de ligne en dessous?
              // setItemShowed(userListAfterSearch.slice(page * selectedItemByPage, (page + 1) * selectedItemByPage));
            }}>
            {page + 1}
          </button>
        ))} */}
        <button
          className={Page === ArrayOfPages.length - 1 ? "prevnext-button-disabled" : "prevnext-button"}
          onClick={
            Page !== ArrayOfPages.length - 1
              ? () => {
                  SetOffSet((Page + 1) * selectedItemByPage);
                  SetPage(Page + 1);
                }
              : () => {}
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
