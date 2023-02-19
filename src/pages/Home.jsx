import AppLayout from "../components/partials/layout/AppLayout";
import FormTweetCard from "../components/FormTweetCard"
import UserTweetCard from "../components/UserTweetCard"
import { Typography } from "@mui/material";
import { useState } from "react";

// tweet datas
import { tweetsData } from "../components/utils/dummy";


const Home = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [tweetsArray, setTweetsArray] = useState(tweetsData);

    const handleTweet = () => {
        setTweetsArray((prev) => {
            return [...prev, { title, description }]
        })
    }

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
                        return(
                            <UserTweetCard 
                                title={tweet.title}
                                description={tweet.description}
                            />
                        )
                    })
                }
            </div>
        </AppLayout>
    );
}

export default Home;
