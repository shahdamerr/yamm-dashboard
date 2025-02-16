import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DashBoard from "./pages/DashBoard";
import { store } from "./store";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
