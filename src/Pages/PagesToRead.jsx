import { useContext } from "react";
import BooksProvider from "../Provider/BooksProvider";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import EmptyWishList from "../Components/EmptyWishList";

const colors = [
  "#1E90FF", // Blue
  "#28A745", // Green
  "#FF7F50", // Orange
  "#FFD700", // Yellow
  "#6A5ACD", // Purple
  "#20B2AA", // Teal
  "#FF69B4", // Pink
  "#FF6347", // Coral
  "#4B0082", // Indigo
];

const PagesToRead = () => {
  const { wishList } = useContext(BooksProvider);
  console.log(wishList);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      {wishList.length === 0 ? (
        <EmptyWishList />
      ) : (
        <div className="h-[1000px] mt-16 w-[full] mx-auto">
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={wishList}
              margin={{
                top: 20,
                right: 0,
                left: -30,
                bottom: 70,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="bookName"
                height={200}
                interval={0}
                angle={-75}
                textAnchor="end"
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {wishList.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default PagesToRead;
