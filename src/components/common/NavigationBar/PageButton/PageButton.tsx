import React, {FC, memo, useCallback} from "react";
import { Styled } from "./PageButton-styled";
import {NavigationRoutes} from "../../NavigationRoutes/NavigationRoutes.types";
import {useNavigate} from "react-router-dom";

interface IPageButtonProps {
    isActive: boolean;
    pageName: string;
    pageRoute: NavigationRoutes;
}

export const PageButton: FC<IPageButtonProps> = memo(({isActive, pageName, pageRoute}) => {

    const navigate = useNavigate();

    const redirectToPage = useCallback(() => {
        navigate(pageRoute, {
            replace: true
        });
    }, [pageRoute]);

    return (
        <Styled.Button
            onClick={redirectToPage}
            isActive={isActive}
        >
            {pageName}
        </Styled.Button>
    )
});