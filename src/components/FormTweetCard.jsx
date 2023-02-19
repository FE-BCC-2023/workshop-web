import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
    padding: 40px;
    border-radius: 30px;
    background-color: white;
    width: 70%;
    margin: auto;
`

const FormTweetCard = ({ setTitle, setDescription, handleTweet }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("form disubmit")

        handleTweet()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Typography variant="h5" fontWeight={600}>Give me your best tweet!</Typography>
            <TextField
                fullWidth
                sx={{ marginTop: '20px' }}
                label="Title"
                variant="outlined"
                name="title"
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <TextField
                fullWidth
                sx={{ marginTop: '20px' }}
                label="Description"
                multiline
                minRows={5}
                name="description"
                onChange={(e) => { setDescription(e.target.value) }}
            />
            <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
        </Form>
    )
}

export default FormTweetCard;
