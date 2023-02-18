import { Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../api/services/register";

const Form = styled.form`
    padding: 40px;
    border-radius: 30px;
    background-color: white;
    width: 70%;
    margin: auto;
`

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            const result = await register(email, password)

            console.log(result);

            setTimeout(() => {
                navigate('/login')
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form>
            <Typography variant="h5" fontWeight={600} marginBottom="20px">Register duls dong ☝</Typography>
            <TextField
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                name="email"
                onChange={e => { setEmail(e.target.value) }}
            />
            <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                margin={"normal"}
                name="password"
                onChange={e => { setPassword(e.target.value) }}
            />
            <Button
                onClick={handleSignup}
                type="submit"
                variant="contained"
                sx={{ marginTop: '10px' }}>
                Submit
            </Button>
            <Typography
                sx={{ marginTop: '10px' }}>
                Dah ada akun? <Link href="/login" sx={{ cursor: 'pointer' }}>Klik disini</Link>
            </Typography>
        </Form>
    );
}

export default RegisterForm;
