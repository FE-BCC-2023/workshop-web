import { Typography, TextField, Button, Link } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

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

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()

        axios.post('https://tweet-api.up.railway.app/api/v1/auth/register', {
            email: email,
            password: password
        })
        .then((apapun) => {
            console.log(apapun);

            setTimeout(() => {
                navigate('/login')
            }, 1000)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <Form onSubmit={handleRegister}>
            <Typography
                variant="h5"
                sx={{ fontWeight: '600', textTransform: 'capitalize' }}>
                Register duls dong ☝
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
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
                <Typography sx={{ marginTop: '10px' }}>Dah ada akun? <Link href="/login">Klik Disini</Link></Typography>
            </Divs>
        </Form>
    )
}

export default RegisterForm
