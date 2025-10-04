import { Outlet, useLoaderData } from "react-router";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import BooksProvider from "../Provider/BooksProvider";
import { useState } from "react";

const RootLayout = () => {
  const [wishList, setWishList] = useState([]);
  const [sortBy, selectSortBy] = useState("");

  const booksData = useLoaderData();
  const handleWishList = (newBook) => {
    const bookExist = wishList.find((list) => list.bookId === newBook.bookId);
    if (!bookExist) {
      setWishList([...wishList, newBook]);
      alert("Book added to wishlist");
    } else {
      alert("already added");
    }
  };

  // console.log(sortBy);
  const sortedBooks = [...booksData].sort((a, b) => {
    if (sortBy === "rating") return a.rating - b.rating;
    if (sortBy === "pages") return a.totalPages - b.totalPages;
    if (sortBy === "publisher") return a.yearOfPublishing - b.yearOfPublishing;
    return booksData;
  });
  // console.log(sortedBooks);

  return (
    <BooksProvider.Provider
      value={{
        booksData,
        handleWishList,
        wishList,
        sortedBooks,
        sortBy,
        selectSortBy,
      }}
    >
      <div>
        <header className="py-5">
          <Navbar />
        </header>
        <Container>
          <Outlet />
        </Container>
      </div>
    </BooksProvider.Provider>
  );
};

export default RootLayout;
