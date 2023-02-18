import LoginForm from "../components/AuthForm/LoginForm";
import { Container } from "../components/partials/appbar/TopAppBar";
import AppLayout from "../components/partials/layout/AppLayout";

const Login = () => {
    return ( 
        <AppLayout>
            <Container style={{ width: '100%' }}>
                <LoginForm/>
            </Container>
        </AppLayout>
     );
}
 
export default Login;
