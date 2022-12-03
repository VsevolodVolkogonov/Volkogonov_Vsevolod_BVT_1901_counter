import React, {memo} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyled } from "./global-styled";
import {mainTheme} from "./theme";
import {FCWithChildren} from "../types/react.types";

export const StyledProvider: FCWithChildren = memo(({children}) => {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyled/>
            {children}
        </ThemeProvider>
    )
})