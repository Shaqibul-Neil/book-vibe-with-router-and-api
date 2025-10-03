import axios from "axios";
import RootLayout from "../Layout/RootLayout";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import ReadBooks from "../Pages/ReadBooks";
import WishlistBooks from "../Pages/WishlistBooks";
import PagesToRead from "../Pages/PagesToRead";
import BookDetails from "../Pages/BookDetails";

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
export default router;
