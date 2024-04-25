import React from "react";
import { IconTypes } from "./types";

function MoreHorizontal({
  width = 24,
  height = 25,
  color = "",
  inheritColor = false,
}: IconTypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4599_29846)">
        <path
          d="M5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5ZM19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5ZM12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5Z"
          fill={inheritColor ? "inherit" : color ? color : "#858089"}
        />
      </g>
      <defs>
        <clipPath id="clip0_4599_29846">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MoreHorizontal;