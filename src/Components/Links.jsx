import { NavLink } from "react-router";

const Links = ({ item }) => {
  return (
    <NavLink
      to={item.to}
      className={({
        isActive,
      }) => `py-2 px-3 transition-all rounded-md duration-200 border
        ${
          isActive && item.name !== "Book Vibe"
            ? "border-green-600  text-green-600"
            : " border-transparent"
        } hover:border-green-600`}
    >
      {item.name}
    </NavLink>
  );
};

export default Links;
