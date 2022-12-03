import styled from "styled-components";

type ButtonProps = {
    isActive: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: ${({theme, isActive}) => isActive ? theme.colors.secondary : theme.colors.contrast};
    color: ${({theme}) => theme.colors.typography};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    border-radius: 19px;
    border: 1px solid ${({theme}) => theme.colors.typography};
    line-height: 29px;
    font-weight: 500;
    font-size: 24px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: ${({isActive}) => isActive ? 'not-allowed' : 'pointer'};
`

export const Styled = {
    Button,
}