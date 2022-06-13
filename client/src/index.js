import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/landing.js";
import {render} from 'react-dom';
import OutsideSidebar from './OutsideSidebar.js';
import InsideSidebar from './InsideSidebar.js';
import About from './pages/about.js';
import Devnotes from './pages/devnotes.js';
import ContactUs from './pages/contactus.js';
import Admin from './pages/admin.js'
import Credits from './pages/credits';
const rootElement = document.getElementById("root")

/* 
Uses React Router v6 Outlet to declare pages inside and outside of Sidebar.
Outlet refers back to the child element put at the end.
So <SideBar /> <Outlet /> becomes <SideBar /> - <Route/>..
*/

render(
  <BrowserRouter>
    <Routes>
      <Route element={<OutsideSidebar />}>
            <Route path="/" element={<Landing />}/>
      </Route>  
      <Route element={<InsideSidebar />} className="contents">
          <Route path="home" element={<App />} />
          <Route path="devNotes" element={<Devnotes /> }/>
          <Route path="about" element={<About />}/>
          <Route path="contactUs" element={<ContactUs /> }/>
          <Route path="credits" element={<Credits /> }/>
          <Route path="/admin/*" element={<Admin /> }/>
    </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

/*
 each page is built separately reference /pages for each page
*/

reportWebVitals();
