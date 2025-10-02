const Banner = () => {
  return (
    <div className="py-20 bg-[rgba(19,19,19,0.05)] rounded-md flex justify-between items-center mt-8 px-28 mb-24">
      <div className="space-y-8">
        <h1 className="font-bold text-6xl leading-20">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn bg-green-600 text-white px-6 rounded-lg">
          View the List
        </button>
      </div>
      <div>
        <img src="../public/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
