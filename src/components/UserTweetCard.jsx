import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { createAxiosInstance } from "./api/api";

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

const UserTweetCard = ({ title, description, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const axiosInstance = createAxiosInstance()

    const editTweet = (e) => {
        e.preventDefault()

        axiosInstance.put('tweet/update', {
            title: newTitle,
            description: newDescription,
            id
        }, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then((result) => {
            console.log(result)

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch((err) => {
            console.log(err)
        });
    }

    const handleDelete = () => {
        axiosInstance.delete('tweet/delete', {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            },
            data: {
                id
            }
        })
        .then((result) => {
            console.log(result)

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Form onSubmit={editTweet}>
            {
                !isEdit ?
                    <div>
                        <Typography variant="h5" fontWeight={600}>{title}</Typography>
                        <Typography sx={{ marginTop: '20px' }}>
                            {description}
                        </Typography>
                        <Button
                            onClick={() => { setIsEdit(true) }}
                            variant="contained"
                            sx={{ marginTop: '20px' }}
                            type="button"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ marginTop: '20px', marginLeft: '10px' }}
                            type="button"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </div>
                    :
                    <>
                        <TextField
                            label="Title"
                            fullWidth
                            defaultValue={title}
                            onChange={(e) => { setNewTitle(e.target.value) }}
                        />
                        <TextField
                            label="Description"
                            fullWidth
                            defaultValue={description}
                            sx={{ marginTop: '20px', marginBottom: '20px' }}
                            multiline
                            minRows={5}
                            onChange={(e) => { setNewDescription(e.target.value) }}
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button 
                        type="button"
                        onClick={() => { setIsEdit(false) }}
                        variant="contained" sx={{ marginLeft: '10px' }}>Cancel</Button>
                    </>
            }
        </Form>
    )
}

export default UserTweetCard;
