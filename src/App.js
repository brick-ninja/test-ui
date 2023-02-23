import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "src/components/layout/MainLayout";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import EngagePage from "./pages/engage";
import EnrichPage from "./pages/enrich";
import People from './pages/search/People'
import Companies from './pages/search/companies'
import Lists from './pages/search/Lists'
import SavedSearches from './pages/search/SavedSearches'

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
      {
        path: "search",
        element: <SearchPage />,
        children: [
          {
            path: 'people',
            element: <People />
          },
          {
            path: 'companies',
            element: <Companies />
          },
          {
            path: 'lists',
            element: <Lists />
          },
          {
            path: 'saved-searches',
            element: <SavedSearches />
          }
        ]
      },
      {
        path: "engage",
        element: <EngagePage />,
      },
      {
        path: "enrich",
        element: <EnrichPage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
