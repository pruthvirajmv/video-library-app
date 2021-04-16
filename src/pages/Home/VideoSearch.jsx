import React, { useState } from "react";

export default function ProductsSearch({ setSearchInput }) {
  const [input, setInput] = useState("");

  function searchHandler() {
    setSearchInput(input);
  }

  function clearSearch() {
    setInput("");
    setSearchInput("");
  }

  return (
    <>
      <div className="search-bar">
        <div class="input-bar">
          <input
            type="text"
            value={input}
            placeholder="Search videos"
            onChange={(e) => setInput(() => e.target.value)}
          />
          {input !== "" && (
            <button onClick={clearSearch} class="bttn bttn-secondary">
              X
            </button>
          )}
        </div>
        <button class="bttn bttn-primary" onClick={searchHandler}>
          Search
        </button>
      </div>
    </>
  );
}
