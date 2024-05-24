import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExploreDetails from "../pages/ExploreDetails";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search", // Adjusted path for search rte
        element: <SearchPage />,
      },
      {
        path: ":explore",
        element: <ExploreDetails />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

export default router;
