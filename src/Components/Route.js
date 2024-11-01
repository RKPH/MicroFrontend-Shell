import React, { lazy, Suspense } from "react"; // Import Suspense

const HomePage = lazy(() => import("homepage/HomePage"));
const MenPage = lazy(() => import("ProductPages/Men-Page"));

const WomenPage = lazy(() => import("ProductPages/WomenPage"));

const KidPage = lazy(() => import("ProductPages/KidsPage"));

const BrandsPage = lazy(() => import("ProductPages/BrandssPage"));

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
];
