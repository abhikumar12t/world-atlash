import React from "react";
import { ClipLoader } from "react-spinners";

const Loder = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>
      <ClipLoader color="#0077ff" size={80} />
    </div>
  );
};

export default Loder;
