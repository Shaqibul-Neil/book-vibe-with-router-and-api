import { Outlet } from "react-router";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Container>
        <header>
          <Navbar />
        </header>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
