import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import ReadBook from "../Components/ReadBook";

const ReadBooks = () => {
  const { sortedBooks } = useContext(BooksProvider);
  console.log(sortedBooks);
  return (
    <div className="grid grid-cols-1 gap-6">
      {sortedBooks.map((book) => (
        <ReadBook book={book} key={book.bookId} />
      ))}
    </div>
  );
};

export default ReadBooks;
