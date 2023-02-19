import { Typography, TextField, Button, Link } from "@mui/material";
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
    return(
        <Form>
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
                />
                <TextField
                    sx={{ marginTop: '20px' }}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    fullWidth
                />
                <Button variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
                <Typography sx={{ marginTop: '10px' }}>Dah ada akun? <Link href="/login">Klik Disini</Link></Typography>
            </Divs>
        </Form>
    )
}

export default RegisterForm