import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import ReadBook from "../Components/ReadBook";

const ReadBooks = () => {
  const books = useContext(BooksProvider);
  // console.log(books);
  return (
    <div className="grid grid-cols-1 gap-6">
      {books.map((book) => (
        <ReadBook book={book} key={book.bookId} />
      ))}
    </div>
  );
};

export default ReadBooks;
