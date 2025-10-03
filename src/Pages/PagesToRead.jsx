import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";

const PagesToRead = () => {
  const { wishList } = useContext(BooksProvider);
  console.log(wishList);
  return <div>Pages</div>;
};

export default PagesToRead;
