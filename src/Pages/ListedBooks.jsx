import { NavLink, Outlet } from "react-router";

const ListedBooks = () => {
  // console.log(books);
  return (
    <div className="mt-6">
      <div className="h-28 bg-[rgba(19,19,19,0.05)]">
        <div className="flex items-center justify-center h-full">
          <h2 className="text-3xl font-bold">Books</h2>
        </div>
      </div>
      <select
        name=""
        id=""
        className="mx-auto block px-2 border rounded-lg bg-green-500 text-white py-3 mt-6 mb-16"
      >
        <option disabled selected>
          Sort By
        </option>
        <option value="">Rating</option>
        <option value="">Number of Pages</option>
        <option value="">Publisher Year</option>
      </select>

      <div className="flex items-center gap-8">
        <NavLink
          className={({ isActive }) =>
            `text-lg p-3 rounded-md border ${
              isActive ? "border-gray-600" : "border-transparent"
            }`
          }
          to="/listed-books/read-books"
        >
          Read Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg p-3 rounded-md border ${
              isActive ? "border-gray-600" : "border-transparent"
            }`
          }
          to="/listed-books/wishlist-books"
        >
          WishList Books
        </NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
