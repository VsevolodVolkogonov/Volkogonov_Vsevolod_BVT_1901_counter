import {Styled} from "./MainLayout-styled";
import {Header} from "../Header/Header";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header/>
            </Styled.Header>
            <Styled.Navigation>
                <NavigationBar/>
            </Styled.Navigation>
            <Styled.PageContentWrapper>
                <Outlet/>
            </Styled.PageContentWrapper>
        </Styled.Wrapper>
    )
}