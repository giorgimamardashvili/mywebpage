import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? "white" : "#BCBCB1",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
