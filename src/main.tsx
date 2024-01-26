import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Root/page.tsx";
import "./index.css";
import { QueryProvider } from "./providers/tanstack-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtistsPage from "./routes/Artists/page.tsx";
import AlbumsPage from "./routes/Albums/page.tsx";
import TracksPage from "./routes/Tracks/page.tsx";
import { ArtistPage } from "./routes/Artist/page.tsx";
import { FavoritesPage } from "./routes/Favorites/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/artists",
    element: <ArtistsPage />,
  },
  {
    path: "/albums",
    element: <AlbumsPage />,
  },
  {
    path: "/tracks",
    element: <TracksPage />,
  },
  {
    path: "/artist",
    element: <ArtistPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>
);
