import styled from "styled-components";
import TopAppBar, { Container } from "../appbar/TopAppBar";

const LayoutContainer = styled(Container)`
    background: rgb(132,161,222);
    flex-direction: column;
    background: linear-gradient(94deg, rgba(132,161,222,1) 0%, rgba(23,134,222,0.23899982356223737) 100%);
    padding: 100px 10px 0 10px;
    width: 100%;
    min-height: 100vh;
    @media(min-width: 900px) {
        padding: 100px 200px 0 200px;
    }
`
const AppLayout = ({ children }) => {

    return (
        <>
            <TopAppBar />
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </>
    );
}

export default AppLayout;
