import { Button, Typography } from "@mui/material"
import { useSearchParams } from "react-router-dom"

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    return(
        <Typography sx={{
            marginTop : "4rem"
        }}>
            <Button variant="outlined" onClick={() => setSearchParams({
                filter : "active"
            })}>Active users</Button>
            <Button variant="outlined" onClick={() => setSearchParams({})}>Reset Filters</Button>
            <Typography>{searchParams.get('filter') === "active" ? "List of active users" : "List of users"}</Typography>
        </Typography>
    )
}

export default Users