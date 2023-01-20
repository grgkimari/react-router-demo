import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Home</h2>
        <Button variant="contained" onClick={() => navigate('order-summary')}>Checkout</Button>
    </div>
  )
};

export default Home;
