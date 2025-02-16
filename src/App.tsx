import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import { Table } from "antd";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DashBoard>
          <Table />
        </DashBoard>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
