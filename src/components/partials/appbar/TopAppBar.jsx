import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { Button, List, Stack, Typography } from "@mui/material";
import { useContext } from "react";

import { UserContext } from "../../context/AuthContext";
import { logout } from "../../../api/services/logout";

const TopNav = styled.nav`
    padding: 20px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media (min-width: 700px) {
        padding: 20px 200px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
`

const TopAppBar = () => {
    const { user } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const result = await logout(user.token);

            console.log(result);

            window.localStorage.removeItem('token');

            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TopNav>
            <Container>
                <BsTwitter size={25} />
                <Typography fontSize={20} marginLeft={3} fontWeight="600">Twitter Clone</Typography>
            </Container>
            <Stack direction="row" justifyContent="space-between">
                <Button href="/" variant="outlined">
                    <List>Home</List>
                </Button>
                {
                    user ?
                        <Button onClick={handleLogout} variant="outlined" sx={{ marginLeft: '20px' }}>
                            <List>Logout</List>
                        </Button>
                        :
                        <Button href="/login" variant="outlined" sx={{ marginLeft: '20px' }}>
                            <List>Login</List>
                        </Button>
                }
            </Stack>
        </TopNav>
    );
}

export default TopAppBar;
