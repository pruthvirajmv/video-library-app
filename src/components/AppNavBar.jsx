import "../styles.css";

import { NavLink } from "react-router-dom";

export function AppNavBar({ setShowNav }) {
   return (
      <>
         <nav className="nav nav-dark">
            <div>
               <button className="bttn bttn-hamburger" onClick={() => setShowNav((prev) => !prev)}>
                  <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
               </button>
               <NavLink end to="/" activeClassName="active-page">
                  <span>Home</span>
               </NavLink>
            </div>
            <div className="nav-list">
               <NavLink to="/playlists" activeClassName="active-page">
                  Playlists
               </NavLink>
               <NavLink to="/history" activeClassName="active-page">
                  History
               </NavLink>
               <NavLink to="/profile" activeClassName="active-page">
                  <i className="fa fa-user fa-lg" aria-hidden="true"></i>
               </NavLink>
            </div>
         </nav>
      </>
   );
}
