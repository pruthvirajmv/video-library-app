import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"

export function AppSideNavBar({showNav}) {
    return(
        <>
        <div 
          className="side-nav">
          <ul className="list">
            <li>
              <NavLink to={`/liked`} activeClassName="active-page">
                <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i> &nbsp;
                {showNav && <span>Liked Videos</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/watchLater`} activeClassName="active-page">
                <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i> &nbsp;
                {showNav && <span>Watch Later</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/playlists`} activeClassName="active-page">
              <i class="fa fa-list fa-2x" aria-hidden="true"></i> &nbsp;
                {showNav && <span>All Playlists</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/history`} activeClassName="active-page">
                <i className="fa fa-history fa-2x" aria-hidden="true"></i> &nbsp;
                {showNav && <span>History</span>}
              </NavLink>
            </li>
          </ul>
        </div>
    </>
    )
}