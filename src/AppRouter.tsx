import Product from "./pages/Product";
import App from "./App";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import Payment from "./pages/Payment";
import Summary from "./pages/Summary";

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
          path:"/Product/:id",
          element:<Product/>,
        },
        {
          path:"/Payment",
          element:<Payment/>,
        },
        {
          path:"/Summary",
          element:<Summary/>,
        },
        // Bien laisser la route 404 en dernier afin de s'assurer qu'il sera utilisée uniquement si aucune routes ne correspond à l'URL
        {
          path: "*",
          element: <NotFound />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default AppRouter;
