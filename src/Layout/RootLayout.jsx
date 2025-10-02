import { Outlet } from "react-router";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header className="py-5">
        <Navbar />
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
