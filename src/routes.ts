import {
    Home,
    GetStarted,
    MainApp
} from "./pages";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/get-started",
        component: GetStarted,
    },
    {
        path: "/app",
        component: MainApp
    }
]