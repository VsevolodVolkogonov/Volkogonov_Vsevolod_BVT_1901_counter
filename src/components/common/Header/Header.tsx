import React, {FC, memo} from "react";
import {Styled} from "./Header-syled";

export const Header: FC = memo(() => {
    return (
        <Styled.Wrapper>
            <Styled.Title>
                BVT1901 Volkogonov Vsevolod - Counter MTUCI UX/UI
            </Styled.Title>
        </Styled.Wrapper>
    )
})