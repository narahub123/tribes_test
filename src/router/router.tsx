import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { BizPage, ComuPage, LandingPage, MakersPage } from "../pages";

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
        element: <ComuPage />,
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
