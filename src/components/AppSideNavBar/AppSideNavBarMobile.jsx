import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export function AppSideNavBarMobile({showNav}) {
    return(
        <>
        { showNav &&        
          <div 
              className="side-nav side-nav-mobile">
              <div className="list">
                <div>
                  <Link to={`/liked`}>
                    <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i> &nbsp;
                    <span>Liked Videos</span>
                  </Link>
                </div>
                <div>
                  <Link to={`/watchLater`}>
                    <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i> &nbsp;
                    <span>Watch Later</span>
                  </Link>
                </div>
                <div>
                  <Link to={`/playlists`}>
                    <i className="fa fa-list fa-2x" aria-hidden="true"></i> &nbsp;
                    <span>All Playlists</span>
                  </Link>
                </div>
                <div>
                  <Link to={`/history`}>
                    <i className="fa fa-history fa-2x" aria-hidden="true"></i> &nbsp;
                    <span>History</span>
                  </Link>
                </div>
              </div>
          </div>}
    </>
    )
}