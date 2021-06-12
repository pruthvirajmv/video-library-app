import React from "react";
import "./toast.styles.css";
import { useEffect, useState } from "react";

let undo = true;

export function ToastWithUndoBttn({
   undoFunction,
   undoParams,
   currentList,
   updatedList,
   listName,
}) {
   function clickHandler() {
      undo = false;
      undoFunction(undoParams);
   }
   // console.log(updatedList);
   useEffect(() => (undo = true), []);

   return (
      <>
         <p>
            {updatedList.length > currentList.length ? (
               <span>added to {listName} </span>
            ) : (
               <span>removed from {listName} </span>
            )}
            {undo && (
               <span className="txt-white" onClick={clickHandler}>
                  Undo
               </span>
            )}
         </p>
      </>
   );
}
