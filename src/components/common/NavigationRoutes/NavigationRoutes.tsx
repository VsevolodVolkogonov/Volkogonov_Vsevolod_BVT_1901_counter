import React, {FC, memo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {CounterPage} from "../../pages/CounterPage";
import {Task2Page} from "../../pages/Task2Page";
import {Task3Page} from "../../pages/Task3Page";
import {Task4Page} from "../../pages/Task4Page";
import {NavigationRoutes as NavigationRoutesEnum} from "./NavigationRoutes.types";
import {MainLayout} from "../MainLayout/MainLayout";
import {NotFound404} from "../../pages/NotFound404";

export const NavigationRoutes: FC = memo(() => {

    return (
        <Routes>
            <Route path={NavigationRoutesEnum.Main} element={<MainLayout/>}>
                <Route index element={<Navigate to={NavigationRoutesEnum.Counter} replace />}/>
                <Route path={NavigationRoutesEnum.Counter} element={<CounterPage />}/>
                <Route path={NavigationRoutesEnum.Task2} element={<Task2Page />}/>
                <Route path={NavigationRoutesEnum.Task3} element={<Task3Page />}/>
                <Route path={NavigationRoutesEnum.Task4} element={<Task4Page />}/>
                <Route path={NavigationRoutesEnum.NotFound404} element={<NotFound404 />}/>
            </Route>
        </Routes>
    )
})