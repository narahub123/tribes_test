import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  BizPage,
  ComuPage,
  LandingPage,
  MainComuPage,
  MakersPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/comu",

        children: [
          {
            index: true,
            element: <ComuPage />,
          },
          {
            path: "main",
            element: <MainComuPage />,
          },
        ],
      },
      {
        path: "/biz",
        element: <BizPage />,
      },
      {
        path: "/makers",
        element: <MakersPage />,
      },
    ],
  },
]);
