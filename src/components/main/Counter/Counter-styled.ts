import styled, {css} from "styled-components";

const fontStyles = css`
    font-size: 39px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.typography};
`

const counterButtonStyles = css`
    background-color: ${({ theme }) => theme.colors.typography};
    border-radius: 50px;
    width: 97px;
    height: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const counterButtonSignStyles = css`
    font-size: 100px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.extraContrast};
    text-align: center;
    vertical-align: middle;
    margin-bottom: 12px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 199px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 431px;
    min-height: 387px;
    background-color: ${({ theme }) => theme.colors.contrast};
    border-radius: 55px;
`

const CardTitle = styled.h2`
    ${fontStyles};
    font-size: 36px;
    margin-top: 37px;
`

const CardCounterValue = styled.span`
    ${fontStyles};
    margin-top: 39px;
`

const CardCounterButtonsWrapper = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 52px;
    cursor: pointer;
`

const CardCounterButtonsDecrement = styled.div`
    ${counterButtonStyles};
  
    &:before {
      content: "–";
      ${counterButtonSignStyles};
    }
`

const CardCounterButtonsIncrement = styled.div`
    ${counterButtonStyles};
  
    &:before {
      content: "+";
      ${counterButtonSignStyles};
    }
`

export const Styled = {
    Wrapper,
    Card,
    CardTitle,
    CardCounterValue,
    CardCounterButtonsWrapper,
    CardCounterButtonsDecrement,
    CardCounterButtonsIncrement,
}