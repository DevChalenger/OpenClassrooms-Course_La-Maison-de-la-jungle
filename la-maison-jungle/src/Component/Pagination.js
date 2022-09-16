import React, { useEffect } from "react";

export default function Pagination({
  currentPage,
  pageNumber,
  setCurrentPage,
  movies,
}) {
  const prevPage = (currentPage) => {
    console.log(currentPage);
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = (currentPage) => {
    if (currentPage !== pageNumber.length) setCurrentPage(currentPage + 1);
  };
  const handlePages = (number) => setCurrentPage(number);

  return (
    <div className="indexContainer">
      <button onClick={() => prevPage(currentPage)} className="indexPages" />

      {pageNumber.map((n) => (
        <li key={n}>
          <h2 className="indexPages" onClick={() => handlePages(n)}>
            {n}
          </h2>
        </li>
      ))}
      <button onClick={() => nextPage(currentPage)} className="indexPages" />
    </div>
  );
}
