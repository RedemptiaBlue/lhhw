import React from "react";
import "./nav.css";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div id="sidebar">
      <hr />
      <Nav variant="pills" className="flex-column" defaultActiveKey="/">
        <Nav.Item>
          <NavLink className="nav-link" exact to="/">
            <span>Home</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/aboutme">
            <span>About Us</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/services/">
            <span>Services</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/contactus">
            <span>Contact Us</span>
          </NavLink>
        </Nav.Item>
      </Nav>
      <hr />
    </div>
  );
}

export default NavBar;
