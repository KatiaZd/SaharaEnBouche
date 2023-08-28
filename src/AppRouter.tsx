import Product from "./pages/Product";

import { productLoader } from "./pages/Product";

import App from "./App";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PanierPage from "./pages/PanierPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "/Product/:id",
          element: <Product />,
          loader: productLoader,
        },
        {
          path: "/panier",
          element: <PanierPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default AppRouter;
