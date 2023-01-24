import { Toolbar } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const Products = () => {
    return(
        <>
        <div>
        <input type="search" placeholder="search products"></input>
        </div>
        
        <Toolbar sx={{
            margin : "1rem",
            justifyContent : "space-evenly"
            }}>
        <Link to="featured">Featured Products</Link>
        <Link to="new">New Products</Link>
        </Toolbar>
        <Outlet />
        </>
        )
}

export default Products