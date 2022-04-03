import React from "react";

const CloseIcon = ({ w = 20, h = 20, fill = "#FFF" }) => {
  return (
    <svg width={w} height={h} version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m 1,3 1.25,-1.25 7.5,7.5 7.5,-7.5 1.25,1.25 -7.5,7.5 7.5,7.5 -1.25,1.25 -7.5,-7.5 -7.5,7.5 -1.25,-1.25 7.5,-7.5 -7.5,-7.5 z'
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
