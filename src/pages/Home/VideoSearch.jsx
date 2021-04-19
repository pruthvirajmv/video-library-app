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
  <div className="search-bar">
    <div class="input-bar">
      <input type="text" value={input} placeholder="Search videos" onChange={(e)=> setInput(() => e.target.value)}
      onKeyDown={searchHandler}
      />
      {input !== "" && (
      <button onClick={clearSearch} class="bttn bttn-secondary">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      )}
    </div>
    <button class="bttn bttn-primary" onClick={()=>setSearchInput(input)}>
      Search
    </button>
  </div>
</>
);
}