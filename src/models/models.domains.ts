import {createDomain} from "effector";

export const rootDomain = createDomain("root");

export const counterDomain = rootDomain.createDomain("counter");