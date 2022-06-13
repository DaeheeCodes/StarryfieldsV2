import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import React from "react";
import { NavLink } from "react-router-dom";  
import styled from "styled-components";
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DraftsIcon from '@mui/icons-material/Drafts';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';import {useState} from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Admin from "./pages/admin";
import Credits from "./pages/credits";
//transcription bug where some css components dont get inheritted. using style component for readability rather than in-line.

const NavUnlisted = styled.nav `
@font-face {
    font-family: samsung;
    src: url(./fonts/samsung.otf);
}
white-space:pre;
overflow: auto;
min-height: 50px;
margin-top: 0px:
left: 0;
top: 0;
position: fixed;
display: flex;
overflow: hidden;
font-size: 30px;
width:100%;
font-family: samsung;
width: 100%;
box-shadow: 0 0 0.7px white;
color: black;
background-color: white;
z-index: 1600;
height: 4%;
border-bottom: 2.5px solid;
justify-content:flex-end;

.title {
  margin-right: auto;
  position: relative;
    padding-left: 0px;
    font-size: 30px;
    margin-top: 3%;
    text-decoration: 'none'
}

.slogan {
  margin-right: auto;
  position: relative;
    font-size: 18px;
  margin-left: -14%;
}

.link {
  position: relative;
  width: 120px;
}

`;

//NavLink is used to support styling options that Link does not support
function Sidebar(){

  return( 
  <div>
            <NavUnlisted > 
            <NavLink to="/home" style={{ textDecoration: 'none' , color: 'black', marginRight: 'auto'}} activeClassName="current" exact >
            <h2 className="title">StarryFields <small style= {{ color: "rgba(10, 132, 255, 0.9)", fontSize: "18px" }}> Life Out of Dreams</small></h2>
                </NavLink>
                <NavLink to="/home" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact >
                    <SidebarLink className="link" text="Home" /> <HomeIcon className ="icon"  />
                </NavLink>
                <NavLink to="/devNotes" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Dev Notes" /> <LibraryBooksIcon className ="icon" />
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Our Team"/> <GroupIcon className ="icon" />
                </NavLink>
                <NavLink to="/contactUs" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Contact Us" /> <DraftsIcon className ="icon" />
                </NavLink>
                <NavLink to="/credits" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Credits"/> <ConstructionIcon className ="icon" />
                </NavLink>
            </NavUnlisted>
       </div>
  );
}
export default Sidebar;

/*
<NavLink to="/admin" style={{ textDecoration: 'none' , color: 'white'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Admin"/> <AdminPanelSettingsIcon className ="icon" />
                </NavLink>
*/
