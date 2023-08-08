import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import FavoriteProducts from "./Pages/FavoriteProducts";
import { FavoriteProvider } from "./utils/FavoriteContext";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/favorites",
      element: <FavoriteProducts />,
    },
  ]);
  return (
    <div>
      <FavoriteProvider>
        <RouterProvider router={routes}>
          <Home />
        </RouterProvider>
      </FavoriteProvider>
    </div>
  );
};

export default App;
