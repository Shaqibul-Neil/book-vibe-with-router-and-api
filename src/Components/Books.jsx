import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import Book from "./Book";

const Books = () => {
  const books = useContext(BooksProvider);
  return (
    <div className="mb-24">
      <h2 className="text-center text-4xl font-bold">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-9 gap-6">
        {books.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;
