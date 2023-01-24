import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"

const UserDetails = () =>{
    const params = useParams()
    return(
        <Typography sx={{
            marginTop : "4rem"
        }}>Details about user {params.userid}
        </Typography>
    )
}

export default UserDetails