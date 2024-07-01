import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPages from "./pages/LandingPages";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import RedirectLink from "./pages/RedirectLink";
import UrlProvider from "./context";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPages />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  return <UrlProvider>
    <RouterProvider router={router} />
  </UrlProvider>;
}

export default App;
