import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
  const { image } = props;
  return (
    <div>
      <Link to="/logo">Logo</Link>
    </div>
  );
}
export default Logo;