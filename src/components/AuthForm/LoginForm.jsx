import { Typography, TextField, Button, Link } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    border-radius: 30px;
    padding: 40px;
    margin-top: 10px;
    background-color: white;
    min-width: 300px;
    min-height: 300px;

    width: 70%;
`

const Divs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start
`

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ 
        message: '',
        status: ''
     })

    const handleLogin = (event) => {
        event.preventDefault()

        axios.post('https://tweet-api.up.railway.app/api/v1/auth/login', {
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
            window.localStorage.setItem('token', response.data.token.token)

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        })
        .catch((error) => {
            console.log(error)
            setError(error.response.data)
        })
    }

    return (
        <Form onSubmit={handleLogin}>
            <Typography sx={{ color: 'red', fontSize: '12px', marginBottom: '15px' }}>{error.message}</Typography>
            <Typography
                variant="h5"
                sx={{ fontWeight: '600', textTransform: 'capitalize' }}>
                login banh ☝
            </Typography>
            <Divs >
                <TextField
                    sx={{ marginTop: '20px' }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <TextField
                    sx={{ marginTop: '20px' }}
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
                <Typography sx={{ marginTop: '10px' }}>Gapunya akun? <Link href="/signup">Klik Disini</Link></Typography>
            </Divs>
        </Form>
    )
}

export default LoginForm;
