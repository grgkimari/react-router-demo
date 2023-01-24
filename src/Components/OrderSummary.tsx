import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
    const navigate = useNavigate()
    return(
       <div>
         <h6>Order confirmed</h6>
        <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
       </div>
    )
}

export default OrderSummary