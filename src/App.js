import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "src/components/layout/MainLayout";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
