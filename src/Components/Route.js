import React, { lazy, Suspense } from "react"; // Import Suspense

const HomePage = lazy(() => import("homepage/HomePage"));
const MenPage = lazy(() => import("ProductPages/MenPage"));

const WomenPage = lazy(() => import("ProductPages/WomenPage"));

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
];
