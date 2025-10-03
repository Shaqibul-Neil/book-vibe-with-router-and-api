import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import WishListBook from "../Components/WishListBook";
import EmptyWishList from "../Components/EmptyWishList";

const WishlistBooks = () => {
  const { wishList } = useContext(BooksProvider);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-12">My Wish List</h2>

      {wishList.length === 0 ? (
        <EmptyWishList />
      ) : (
        <div className="mt-8">
          <h2 className="font-semibold text-2xl text-center">
            Books in the wishlist :{" "}
            {wishList.length < 9 ? `0${wishList.length}` : wishList.length}
          </h2>
          <div className="grid grid-cols-2 mt-12 mb-24 gap-4">
            {wishList.map((list) => (
              <WishListBook list={list} key={list.bookId} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistBooks;
