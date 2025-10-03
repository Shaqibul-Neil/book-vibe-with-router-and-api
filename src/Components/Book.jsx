import { Star } from "lucide-react";
import { useNavigate } from "react-router";
import slugify from "react-slugify";

const Book = ({ book }) => {
  const navigate = useNavigate();
  // console.log(navigate);
  const slug = slugify(book.bookName);
  return (
    <div
      className="border border-gray-400 shadow-sm space-y-6 p-4  rounded-lg cursor-pointer"
      onClick={() => navigate(`/book-details/${slug}`)}
    >
      <figure className="h-[230px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-32 h-[166px] transform rotate-[-3deg] hover:rotate-0 transition duration-300"
        />
      </figure>
      <div className="space-y-4">
        <div className="flex items-center gap-8">
          {book.tags.map((tag, i) => (
            <p className="text-lg text-green-600" key={i}>
              {tag}
            </p>
          ))}
        </div>
        <div className="border-b border-gray-400 border-dashed pb-4 space-y-4">
          <h2 className="text-2xl font-bold">{book.bookName}</h2>
          <p className="font-medium text-gray-600">By: {book.author}</p>
        </div>

        <div className="flex items-center justify-between pb-4">
          <p className="font-medium text-gray-600">{book.category}</p>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-600">{book.rating}</p>
            <p>
              <Star />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
