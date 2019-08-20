import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

function Main() {
  return (
    <nav className="nav flex-column">
      {routes.map((route, index) => (
        <Link key={route.path} className="nav-link" to={route.path}>
          {`${index + 1}. ${route.title}`}
        </Link>
      ))}
    </nav>
  );
}

export default Main;
