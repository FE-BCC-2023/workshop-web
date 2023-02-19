import styled from "styled-components";

import { Container } from "../components/partials/appbar/TopAppBar";
import AppLayout from "../components/partials/layout/AppLayout";
import LoginForm from "../components/AuthForm/LoginForm";

const Divs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Login = () => {
    return (
        <AppLayout>
            <Container style={{ width: '100%' }}>
                <Divs>
                    <LoginForm />
                </Divs>
            </Container>
        </AppLayout>
    );
}

export default Login;
