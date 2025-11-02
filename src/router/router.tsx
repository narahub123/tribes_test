import { createBrowserRouter } from "react-router-dom";
import { MainLayout, SubComuLayout } from "../layouts";
import {
  BizPage,
  ComuNoticeListPage,
  ComuPage,
  ComuReviewPage,
  FAQPage,
  LandingPage,
  MainComuPage,
  MakersPage,
  SubComuPage,
} from "../pages";
import { ComuNoticePage } from "../pages/ComuNoticePage";

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
              {
                path: "notices",
                children: [
                  {
                    index: true,
                    element: <ComuNoticeListPage />,
                  },
                  {
                    path: ":noticeId",
                    element: <ComuNoticePage />,
                  },
                ],
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
                  {
                    path: "notices",
                    children: [
                      {
                        index: true,
                        element: <ComuNoticeListPage />,
                      },
                      {
                        path: ":noticeId",
                        element: <ComuNoticePage />,
                      },
                    ],
                  },
                ],
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
      {
        path: "/faqs",
        element: <FAQPage />,
      },
    ],
  },
]);
