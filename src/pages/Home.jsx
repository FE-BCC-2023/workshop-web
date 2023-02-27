import AppLayout from "../components/partials/layout/AppLayout";
import FormTweetCard from "../components/FormTweetCard"
import UserTweetCard from "../components/UserTweetCard"
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

// tweet datas
import { tweetsData } from "../components/utils/dummy";
import axios from "axios";
import { createAxiosInstance } from "../components/api/api";


const Home = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [tweetsArray, setTweetsArray] = useState([]);
    const axiosInstance = createAxiosInstance()

    const handleTweet = () => {
        axiosInstance.post('tweet/create', {
            title,
            description
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
                console.log(err);
            });
    }

    const getTweets = () => {
        axiosInstance.get('tweet/all', {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
            .then((result) => {
                console.log(result)
                setTweetsArray(result.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getTweets()
    }, [])

    return (
        <AppLayout>
            <FormTweetCard
                handleTweet={handleTweet}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
            />
            <Typography variant="h5" sx={{ marginY: '25px' }}>Your Tweets Goes Here</Typography>
            <div>
                {
                    tweetsArray.map((tweet) => {
                        return (
                            <UserTweetCard
                                title={tweet.title}
                                description={tweet.description}
                                id={tweet.id}
                            />
                        )
                    })
                }
            </div>
        </AppLayout>
    );
}

export default Home;
