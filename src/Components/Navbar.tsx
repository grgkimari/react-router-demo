import { AppBar, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (

      <AppBar>
        <Toolbar variant="dense" sx={{
            justifyContent : "space-evenly"
            }}>
        <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
        </Toolbar>
      </AppBar>

  );
};

export default Navbar;
