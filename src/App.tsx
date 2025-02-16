import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
  ]);

  return <RouterProvider router={router} />;
}
