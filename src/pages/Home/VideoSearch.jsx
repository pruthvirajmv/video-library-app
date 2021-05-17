import React, { useState } from "react";

export default function ProductsSearch({ setSearchInput }) {
const [input, setInput] = useState("");

function searchHandler(event) {
if (event.key === "Enter") {
setSearchInput(input);
}
}

function clearSearch() {
setInput("");
setSearchInput("");
}

return (
<>
  <div className="search-bar input input-primary">
      <input 
        className="input"
        type="text" value={input} placeholder="Search videos" onChange={(e)=> setInput(() => e.target.value)}
        onKeyDown={searchHandler}
      />
      {input !== "" && (
        <i 
        className="fa fa-times" aria-hidden="true"
        onClick={clearSearch}>
        </i>
      )}
      <i 
      class="fa fa-search" aria-hidden="true" 
      onClick={()=>setSearchInput(input)}>
    </i>
    </div>

</>
);
}