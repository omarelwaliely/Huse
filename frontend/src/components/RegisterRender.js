
import { Typography, TextField, Button } from "@mui/material";
function Register() {
    return (
        <>
            <Typography fontSize="30px" marginTop='10px'> Register </Typography>
            <TextField
                label="Name"
                style={{ marginTop: "50px", width: "400px" }}

            />
            <TextField
                label="Username"
                style={{ width: "400px" }}
            />
            <TextField
                label="Password"
                style={{ width: "400px" }}
                type='password'
            />
            <Button variant='contained' color='primary' > Register
            </Button>
        </>
    );
}

export default Register;