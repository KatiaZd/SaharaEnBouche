import Product from "./pages/Product";

import { productLoader } from "./component/ProductDetail/ProductDtail";

import App from "./App";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        // {

        //   path:"/Product/:id",
        //   element:<Product/>
        // },

        {
          path: "/Product/:id",
          //element: <ProductDetail />,
          element: <Product />,
          loader: productLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default AppRouter;
