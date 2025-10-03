import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import WishListBook from "../Components/WishListBook";

const WishlistBooks = () => {
  const { wishList } = useContext(BooksProvider);
  console.log(wishList);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-12">My Wish List</h2>
      <div className="grid grid-cols-3 mt-12 mb-24">
        {wishList.map((list) => (
          <WishListBook list={list} key={list.bookId} />
        ))}
      </div>
    </div>
  );
};

export default WishlistBooks;
