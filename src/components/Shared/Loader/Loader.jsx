import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Loader = ({ color, size }) => {
  return (
    <div className="flex justify-center items-center">
      <CgSpinnerTwoAlt
        className={`text-${color} animate-spin`}
        style={{ fontSize: size }}
      />
    </div>
  );
};

export default Loader;
