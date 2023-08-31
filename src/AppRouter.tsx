import Product from "./pages/Product";

import { productLoader } from "./pages/Product";

import App from "./App";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PanierPage from "./pages/PanierPage";

import NotFound from "./component/NotFound/NotFound";

import Sammury from "./pages/Sammury";
import Payment from "./pages/Payment";

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
          path: "/Payment",
          element: <Payment />,
        },

        {
          path: "/panier",
          element: <PanierPage />,
        },
        {
          path: "/Sammury",
          element: <Sammury />,
        },

        // Bien laisser la route 404 en dernier afin de s'assurer qu'il sera utilisée uniquement si aucune routes ne correspond à l'URL
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default AppRouter;
