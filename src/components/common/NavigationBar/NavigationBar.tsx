import React, {FC, memo} from "react";
import {Styled} from "./NavigationBar-styled";
import {PageButton} from "./PageButton/PageButton";
import {NavigationRoutes} from "../NavigationRoutes/NavigationRoutes.types";
import useCurrentPath from "../../../hooks/useCurrentPath";

export const NavigationBar: FC = memo(() => {
    const currentPath = useCurrentPath()
    return (
        <Styled.Wrapper>
            <PageButton pageName={'Задание 1'} isActive={currentPath === NavigationRoutes.Counter} pageRoute={NavigationRoutes.Counter}/>
            <PageButton pageName={'Задание 2'} isActive={currentPath === NavigationRoutes.Task2} pageRoute={NavigationRoutes.Task2}/>
            <PageButton pageName={'Задание 3'} isActive={currentPath === NavigationRoutes.Task3} pageRoute={NavigationRoutes.Task3}/>
            <PageButton pageName={'Задание 4'} isActive={currentPath === NavigationRoutes.Task4} pageRoute={NavigationRoutes.Task4}/>
        </Styled.Wrapper>
    )
});