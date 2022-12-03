import {Counter} from "../main/Counter/Counter";
import {EmptyPageTitle, EmptyPageWrapper} from "../../styles/common-styled";

export const CounterPage = () => {
    return (
        <div>
            <EmptyPageWrapper>
                <EmptyPageTitle>
                    Счётчик
                </EmptyPageTitle>
            </EmptyPageWrapper>
            <Counter/>
        </div>
    )
}