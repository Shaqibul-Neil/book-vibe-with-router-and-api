import Lottie from "lottie-react";
import emptyBox from "../../public/empty-box.json";

const EmptyWishList = () => {
  return (
    <div className="mb-24">
      <h2 className="font-semibold text-2xl text-center mt-8">
        Your WishList is Empty
      </h2>
      <div className="flex justify-center py-12">
        <Lottie animationData={emptyBox} loop={true} className="w-80 h-80" />
      </div>
    </div>
  );
};

export default EmptyWishList;
