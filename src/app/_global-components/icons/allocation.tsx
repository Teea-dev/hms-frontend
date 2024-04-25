import * as React from "react";

import { IconTypes } from "./types";

function AllocationIcon({
  width = 16,
  height = 18,
  inheritColor = false,
  color,
}: IconTypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.16667 17.1171C1.70833 17.1171 1.31597 16.9539 0.989583 16.6275C0.663194 16.3011 0.5 15.9088 0.5 15.4504V3.78377C0.5 3.32544 0.663194 2.93308 0.989583 2.60669C1.31597 2.2803 1.70833 2.11711 2.16667 2.11711H5.66667C5.84722 1.61711 6.14931 1.21433 6.57292 0.908773C6.99653 0.603217 7.47222 0.450439 8 0.450439C8.52778 0.450439 9.00347 0.603217 9.42708 0.908773C9.85069 1.21433 10.1528 1.61711 10.3333 2.11711H13.8333C14.2917 2.11711 14.684 2.2803 15.0104 2.60669C15.3368 2.93308 15.5 3.32544 15.5 3.78377V15.4504C15.5 15.9088 15.3368 16.3011 15.0104 16.6275C14.684 16.9539 14.2917 17.1171 13.8333 17.1171H2.16667ZM3.83333 13.7838H9.66667V12.1171H3.83333V13.7838ZM3.83333 10.4504H12.1667V8.78377H3.83333V10.4504ZM3.83333 7.11711H12.1667V5.45044H3.83333V7.11711ZM8 3.15877C8.18056 3.15877 8.32986 3.09974 8.44792 2.98169C8.56597 2.86363 8.625 2.71433 8.625 2.53377C8.625 2.35322 8.56597 2.20391 8.44792 2.08586C8.32986 1.9678 8.18056 1.90877 8 1.90877C7.81944 1.90877 7.67014 1.9678 7.55208 2.08586C7.43403 2.20391 7.375 2.35322 7.375 2.53377C7.375 2.71433 7.43403 2.86363 7.55208 2.98169C7.67014 3.09974 7.81944 3.15877 8 3.15877Z"
        fill={inheritColor ? "inherit" : color ? color : "#858089"}
      />
    </svg>
  );
}

export default AllocationIcon;