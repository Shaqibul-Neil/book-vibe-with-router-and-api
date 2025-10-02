import { Outlet, useLoaderData } from "react-router";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import BooksProvider from "../Provider/BooksProvider";

const RootLayout = () => {
  const booksData = useLoaderData();
  // console.log(booksData);
  return (
    <BooksProvider value={booksData}>
      <div>
        <header className="py-5">
          <Navbar />
        </header>
        <Container>
          <Outlet />
        </Container>
      </div>
    </BooksProvider>
  );
};

export default RootLayout;
