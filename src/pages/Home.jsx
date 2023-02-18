import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/context/AuthContext";
import AppLayout from "../components/partials/layout/AppLayout";
import FormTweetCard from "../components/FormTweetCard";
import { tweetsData } from "../components/utils/dummy";
import { Box, Typography } from "@mui/material";
import UserTweetCard from "../components/UserTweetCard";
import { getTweet } from "../api/services/getTweet";

const Home = () => {
    const { user } = useContext(UserContext);
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const get = async () => {
            try {
                const result = await getTweet(user.token);

                console.log(result);
                setTweets(result.data.data)
            } catch (error) {
                console.error(error);
            }
        }

        get()
    }, [])

    return (
        <AppLayout>
            <FormTweetCard />
            <Typography variant="h5" marginY={5}>Your tweets goes here</Typography>
            <Box>
                {
                    tweets.map((value, index) => {
                        return (
                            <UserTweetCard
                                key={index}
                                id={value.id}
                                title={value.title}
                                description={value.description} />
                        )
                    })
                }
            </Box>
        </AppLayout>
    );
}

export default Home;
