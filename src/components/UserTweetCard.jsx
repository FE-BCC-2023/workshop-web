import { Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import styled from "styled-components";
import { deleteTweet } from "../api/services/deleteTweet";
import { editTweet } from "../api/services/editTweet";

import { UserContext } from "../components/context/AuthContext";

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

const UserTweetCard = ({ id, title, description }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [tweetData, setTweetData] = useState({ id, title, description })
    const { user } = useContext(UserContext);

    const handleUpdate = async () => {
        try {
            const result = await editTweet(user.token, tweetData)

            console.log(result);

            setTimeout(() => {
                window.location.reload()
            }, 1500);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async () => {
        try {
            const result = await deleteTweet(user.token, id)

            console.log(result);

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form>
            {
                isEdit ?
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label="Title"
                            variant="outlined"
                            defaultValue={title}
                            onChange={e => {
                                setTweetData(prev => {
                                    return {
                                        ...prev, title: e.target.value
                                    }
                                })
                            }}
                        />
                        <TextField
                            fullWidth
                            sx={{ marginTop: '25px' }}
                            label="Description"
                            multiline
                            minRows={5}
                            defaultValue={description}
                            onChange={e => {
                                setTweetData(prev => {
                                    return {
                                        ...prev, description: e.target.value
                                    }
                                })
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{ marginTop: '20px' }}
                            onClick={() => { handleUpdate({ id, title, description }) }}>
                            Submit
                        </Button>
                        <Button variant="contained" sx={{ marginTop: '20px', marginLeft: '10px' }} onClick={() => { setIsEdit(!isEdit) }}>Cancel</Button>
                    </>
                    :
                    <>
                        <Typography variant="h5" fontWeight={600}>{title}</Typography>
                        <Typography sx={{ marginTop: '20px' }}>
                            {description}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: '20px' }}
                            onClick={() => { setIsEdit(!isEdit) }}>
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ marginTop: '20px', marginLeft: '10px' }}
                            onClick={handleDelete}>
                            Delete
                        </Button>
                    </>
            }
        </Form>
    )
}

export default UserTweetCard;
