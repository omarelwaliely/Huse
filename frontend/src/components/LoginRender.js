
import { Typography, TextField, Button } from "@mui/material";
function Login() {
    return (
        <>
            <Typography fontSize="30px" marginTop='10px'> Login </Typography>
            <TextField
                label="Username"
                style={{ marginTop: "50px", width: "400px" }}
            />
            <TextField
                label="Password"
                style={{ width: "400px" }}
                type='password'
            />
            <Button variant='contained' color='primary' > Login
            </Button>
        </>
    );
}

export default Login;