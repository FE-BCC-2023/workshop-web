import RegisterForm from "../components/AuthForm/RegisterForm";
import { Container } from "../components/partials/appbar/TopAppBar";
import AppLayout from "../components/partials/layout/AppLayout";
import styled from "styled-components";

const Divs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Signup = () => {
    return (
        <AppLayout>
            <Container style={{ width: '100%' }}>
                <Divs>
                    <RegisterForm />
                </Divs>
            </Container>
        </AppLayout>
    );
}

export default Signup;
