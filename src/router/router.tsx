import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  BizPage,
  ComuPage,
  ComuReviewPage,
  LandingPage,
  MainComuPage,
  MakersPage,
  SubComuPage,
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
            children: [
              {
                index: true,
                element: <MainComuPage />,
              },
              {
                path: "reviews",
                element: <ComuReviewPage />,
              },
            ],
          },
          {
            path: "subs",
            children: [
              {
                index: true,
                element: <SubComuPage />,
              },
              {
                path: ":id",
                element: <>서브</>,
              },
            ],
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
