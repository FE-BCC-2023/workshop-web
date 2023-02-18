import RegisterForm from "../components/AuthForm/RegisterForm";
import { Container } from "../components/partials/appbar/TopAppBar";
import AppLayout from "../components/partials/layout/AppLayout";

const Signup = () => {
    return ( 
        <AppLayout>
            <Container style={{ width: '100%' }}>
                <RegisterForm/>
            </Container>
        </AppLayout>
     );
}
 
export default Signup;
