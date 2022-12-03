import {FC, ReactNode} from "react";

export type FCWithChildren<Props extends object = {}> = FC<Props & { children: ReactNode }>