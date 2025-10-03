import { Star } from "lucide-react";

const WishListBook = ({ list }) => {
  return (
    <div className="border border-gray-400 shadow-sm space-y-6 p-4  rounded-lg cursor-pointer flex items-center gap-6">
      <figure className="h-32 w-32 bg-[rgba(19,19,19,0.05)] rounded-full flex items-center justify-center m-0">
        <img
          src={list.image}
          alt={list.bookName}
          className="w-24 h-24 rounded-full object-cover"
        />
      </figure>
      <div className="space-y-2">
        <div className="flex items-center gap-8">
          {list.tags.map((tag, i) => (
            <p className="text-base text-green-600" key={i}>
              {tag}
            </p>
          ))}
        </div>
        <div className="border-b border-gray-400 border-dashed pb-4 space-y-2">
          <h2 className="text-2xl font-bold">{list.bookName}</h2>
          <p className="font-medium text-gray-600">By: {list.author}</p>
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
