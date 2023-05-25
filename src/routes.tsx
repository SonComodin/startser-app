import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";

import { FC } from "react";
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}
export const routes: Array<Route> = [
    
    {
        key: 'login-route',
        title: 'Login',
        path: '/',
        enabled: true,
        component: Login
    },
    {
        key: 'home-route',
        title: 'Home',
        path: '/home',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'product-route',
        title: 'Product',
        path: '/product',
        enabled: true,
        component: Product
    }
]