import React from "react";

const ArrowRightIcon = ({ w = 20, h = 34, fill = "#FFF" }) => {
  return (
    <svg width={w} height={h} version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <path d='m 1,3 2,-2 16,16 -16,16 -1,-1 15,-15 -15,-15 z' fill={fill} />
    </svg>
  );
};

export default ArrowRightIcon;
