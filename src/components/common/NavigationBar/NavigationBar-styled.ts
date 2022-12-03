import styled from "styled-components";
import {deviceNavigation} from "../../../styles/devices";

const pageButtonsVerticalGap = 24;
const pageButtonsHorizontalGap = 51.76;

const Wrapper = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: ${pageButtonsHorizontalGap}px;
    grid-row-gap: 0;
    padding: 0 24px;
  
    ${deviceNavigation.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${pageButtonsHorizontalGap}px;
        grid-row-gap: ${pageButtonsVerticalGap}px;
    }
  
    ${deviceNavigation.mobile} {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: ${pageButtonsVerticalGap}px;
    }
`

export const Styled = {
    Wrapper,
}