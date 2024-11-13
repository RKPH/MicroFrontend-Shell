import React, {lazy, Suspense} from "react"; // Import Suspense
import NoheaderLayout from "../Layout/NoheaderLayout";
import NotFound from "../Pages/NotFound/404.jsx";

const HomePage = lazy(() => import("homepage/HomePage"));
const MenPage = lazy(() => import("ProductPages/MenPage"));

const WomenPage = lazy(() => import("ProductPages/WomenPage"));

const KidPage = lazy(() => import("ProductPages/KidsPage"));

const BrandsPage = lazy(() => import("ProductPages/BrandssPage"));
const LoginPage = lazy(() => import("homepage/Login"));

export const publicRoutes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/Men",
        component: MenPage,
    },
    {
        path: "/Women",
        component: WomenPage,
    },
    {
        path: "/Kid",
        component: KidPage,
    },
    {
        path: "/Brands",
        component: BrandsPage,
    },
    {
        path: "/Login",
        component: LoginPage,
        layout: NoheaderLayout,
    },
    {
        path: "*",
        component: NotFound,
        layout: NoheaderLayout,
    }
];
