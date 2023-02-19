import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { Button, List, Stack, Typography } from "@mui/material";

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
    return (
        <TopNav>
            <Container>
                <BsTwitter size={25} />
                <Typography fontSize={20} marginLeft={3} fontWeight="600">Twitter Clone</Typography>
            </Container>
            <Stack direction="row" justifyContent="space-between">
                <Button href="/" variant={window.location.pathname === '/' ? 'contained' : 'outlined'}>
                    <List>Home</List>
                </Button>
            </Stack>
        </TopNav>
    );
}

export default TopAppBar;
