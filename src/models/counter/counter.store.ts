import {counterDomain} from "../models.domains";
import {createApi} from "effector";

export const $counter = counterDomain.createStore<number>(0);

export const counterApi = createApi($counter, {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
});