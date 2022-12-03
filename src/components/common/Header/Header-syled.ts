import styled from "styled-components";
import {deviceNavigation} from "../../../styles/devices";

const HeaderZIndex = 100000;

const Wrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${HeaderZIndex};
    background-color: ${({theme}) => theme.colors.typography};
  
    height: 103px;
  
    ${deviceNavigation.tablet} {
        height: 72px;
    }
    
    display: grid;
    align-items: center;
    padding: 0 20px;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;

    ${deviceNavigation.tablet} {
      font-size: 20px;
    }
  
    color: ${({theme}) => theme.colors.contrast};
`

export const Styled = {
    Wrapper,
    Title,
}