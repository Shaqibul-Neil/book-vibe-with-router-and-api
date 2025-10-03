import { Outlet, useLoaderData } from "react-router";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import BooksProvider from "../Provider/BooksProvider";
import { useState } from "react";

const RootLayout = () => {
  const [wishList, setWishList] = useState([]);
  const booksData = useLoaderData();
  const handleWishList = (newBook) => {
    const bookExist = wishList.find((list) => list.bookId === newBook.bookId);
    if (!bookExist) {
      setWishList([...wishList, newBook]);
    } else {
      alert("already added");
    }
  };

  return (
    <BooksProvider.Provider value={{ booksData, handleWishList, wishList }}>
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
