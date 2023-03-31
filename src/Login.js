import React from 'react';
import { Button, Container, TextField } from '@mui/material';

const Login = () => {
    return (
        <div className='login'>
            <h2>Welcome to "Your" Blog!</h2>          
            <TextField               
                className='username-input'
                id="outlined-username-input"
                label="Username"
                type="username"
                autoComplete="current-username"
                sx={{
                    marginBottom: 5,
                }}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{
                    marginBottom: 3,
                }}
            />
            <br />
            <Button variant="contained" sx={{ marginRight: 5}}>Login</Button>
            <Button sx={{ color: 'green' }}>Sign Up!</Button>
        </div>
      );
}
 
export default Login;