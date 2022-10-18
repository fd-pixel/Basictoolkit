import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("FD");

  return (
    <div>
      <h1>Hi,{name}</h1>
    </div>
  );
};

export default Navbar;
