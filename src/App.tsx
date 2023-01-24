import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Admin from "./Components/Admin";
import FeaturedProducts from "./Components/FeaturedProducts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewProducts from "./Components/NewProducts";
import NoMatch from "./Components/NoMatch";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />}/>
          <Route path="*" element={<NoMatch />}/>
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />}/>
            <Route path="new" element={<NewProducts />}/>
            <Route path="featured" element={<FeaturedProducts />}/>
          </Route>
          <Route path="users" element={<Users />}/>
          <Route path="/users/:userid" element={<UserDetails />}/>
          <Route path="/users/admin" element={<Admin />}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
