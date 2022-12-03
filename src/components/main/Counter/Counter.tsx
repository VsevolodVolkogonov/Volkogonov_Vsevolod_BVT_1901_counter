import React from "react";
import {createComponent, useUnit} from "effector-react";
import {$counter, counterApi} from "../../../models/counter/counter.store";
import { Styled } from "./Counter-styled";

export const Counter = createComponent($counter, (_, counterValue) => {

    const {increment: handleIncrementCounter, decrement: handleDecrementCounter} = useUnit(counterApi);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.CardTitle>
                    Счетчик
                </Styled.CardTitle>
                <Styled.CardCounterValue>
                    {counterValue}
                </Styled.CardCounterValue>
                <Styled.CardCounterButtonsWrapper>
                    <Styled.CardCounterButtonsDecrement onClick={handleDecrementCounter}/>
                    <Styled.CardCounterButtonsIncrement onClick={handleIncrementCounter}/>
                </Styled.CardCounterButtonsWrapper>
            </Styled.Card>
        </Styled.Wrapper>
    )

})