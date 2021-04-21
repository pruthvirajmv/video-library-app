import "../styles.css";

import { NavLink } from "react-router-dom";

export function AppNavBar(){
return(
<>
    <nav className="nav nav-dark">
        <NavLink end to="/" activeClassName="active-page">
            Home
        </NavLink>
        <div className="nav-list">
            <NavLink to="/playlists" activeClassName="active-page">
                Playlists
            </NavLink>
            <NavLink to="/history" activeClassName="active-page">
                History
            </NavLink>
        </div>
    </nav>
</>
)
}