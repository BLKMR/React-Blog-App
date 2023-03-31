import { Link } from "react-router-dom";
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logout } from "@mui/icons-material";

const Navbar = (loggedUser) => {
    const currUser = '';

    return (
      <nav className="navbar">
        <Link to="/" style={{ 
            color: '#317ef2',
            borderRadius: '8px',
            fontSize: "30px",
            textDecoration: "bold"         
          }}>My Blog</Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Blog</Link>
          <Link to="/login" style={{}}>
            <LogoutIcon color="black" fontSize="small"/>
          </Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;