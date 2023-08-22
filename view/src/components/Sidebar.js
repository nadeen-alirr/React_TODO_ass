// Sidebar.js
import React, { useState } from "react";
import "../css/sidebar.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const[countboard,setcountboard]=useState(3);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar textColor="#7b7f91" backgroundColor="#2c2c38">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>ALL BOARDS (8)</CDBSidebarMenuItem>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-link">
                Platform Launch
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/markiting" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-link">
                Marketing
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/roadmap" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-link">
                Roadmap
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-link">
                + Create New Board
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarHeader
          prefix={<i className="fa fa-eye-slash fa-large"></i>}
          className="hide-sidebar-header"
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Hide Sidebar
          </a>
        </CDBSidebarHeader>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
