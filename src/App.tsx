import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DashBoard from "./pages/DashBoard";
import { store } from "./store";
import Orderdetails from "./pages/OrderDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/orders/:id",
      element: <Orderdetails />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
