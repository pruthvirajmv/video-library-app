import React, { useState } from "react";

export default function ProductsSearch({ searchInput, setSearchInput }) {
   function clearSearch() {
      setSearchInput("");
   }

   return (
      <>
         <div className="search-bar input input-primary">
            <input
               className="input"
               type="text"
               value={searchInput}
               placeholder="Search videos"
               onChange={(e) => setSearchInput(() => e.target.value)}
            />
            {searchInput !== "" ? (
               <i className="fa fa-times" aria-hidden="true" onClick={clearSearch}></i>
            ) : (
               <i className="fa fa-search" aria-hidden="true"></i>
            )}
         </div>
      </>
   );
}
