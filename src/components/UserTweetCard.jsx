import { Button, Typography } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
    padding: 40px;
    border-radius: 30px;
    background-color: white;
    width: 80%;
    margin: auto;
    min-width: 350px;
    margin-top: 10px;
    margin-bottom: 10px
`

const UserTweetCard = ({ title, description }) => {
    return (
        <Form>
            <>
                <Typography variant="h5" fontWeight={600}>{title}</Typography>
                <Typography sx={{ marginTop: '20px' }}>
                    {description}
                </Typography>
                <Button
                    variant="contained"
                    sx={{ marginTop: '20px' }}
                >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    sx={{ marginTop: '20px', marginLeft: '10px' }}
                >
                    Delete
                </Button>
            </>
        </Form>
    )
}

export default UserTweetCard;
