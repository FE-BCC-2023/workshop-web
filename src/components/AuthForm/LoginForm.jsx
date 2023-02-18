import { Button, Link, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import styled from "styled-components";

// 

import { login } from "../../api/services/login";
import { UserContext } from "../context/AuthContext";

const Form = styled.form`
    padding: 40px;
    border-radius: 30px;
    background-color: white;
    width: 70%;
    margin: auto;
`

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setpPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const result = await login(email, password)

            window.localStorage.setItem('token', JSON.stringify(result.data.token))

            setTimeout(() => {
                window.location.reload()
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleLogin}>
            <Typography variant="h5" fontWeight={600} marginBottom="20px">Login Banh ☝</Typography>
            <TextField
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                onChange={e => { setEmail(e.target.value) }}
            />
            <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                margin={"normal"}
                onChange={e => { setpPassword(e.target.value) }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: '10px' }}>
                Submit
            </Button>
            <Typography
                sx={{ marginTop: '10px' }}>
                Gapunya akun? <Link href="/signup" sx={{ cursor: 'pointer' }}>Klik disini</Link>
            </Typography>
        </Form>
    );
}

export default LoginForm;
