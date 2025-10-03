import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import axios from "axios";
import BookDetails from "./Pages/BookDetails";
import WishlistBooks from "./Pages/WishlistBooks";
import ReadBooks from "./Pages/ReadBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    loader: async () => {
      const res = await axios.get("/booksData.json");
      return res.data;
    },
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
        children: [
          {
            index: true,
            Component: ReadBooks,
          },
          {
            path: "/listed-books/read-books",
            Component: ReadBooks,
          },
          {
            path: "/listed-books/wishlist-books",
            Component: WishlistBooks,
          },
        ],
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
      {
        path: "/book-details/:bookName",
        Component: BookDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
