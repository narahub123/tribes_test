import { createBrowserRouter } from "react-router-dom";
import { MainLayout, SubComuLayout } from "../layouts";
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
                children: [
                  {
                    index: true,
                    element: <SubComuLayout />,
                  },
                  {
                    path: "reviews",
                    element: <ComuReviewPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/notices",
        children: [
          {
            path: ":comuId",
            children: [
              {
                index: true,
                element: <>공지 사항 목록</>,
              },
              {
                path: ":noticeId",
                element: <>공지 사항 상세</>,
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
