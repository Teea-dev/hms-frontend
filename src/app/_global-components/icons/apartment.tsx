import * as React from "react";

import { IconTypes } from "./types";

function ApartmentIcon({
  width = 14,
  height = 16,
  color = "",
  inheritColor = false,
}: IconTypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.58325 15.5C1.2395 15.5 0.945231 15.3776 0.700439 15.1328C0.455648 14.888 0.333252 14.5938 0.333252 14.25V6.125C0.333252 5.92708 0.377523 5.73958 0.466064 5.5625C0.554606 5.38542 0.677002 5.23958 0.833252 5.125L6.24992 1.0625C6.36513 0.979167 6.48557 0.916667 6.61125 0.875C6.73693 0.833333 6.86786 0.8125 7.00402 0.8125C7.14017 0.8125 7.27015 0.833333 7.39396 0.875C7.51778 0.916667 7.63643 0.979167 7.74992 1.0625L13.1666 5.125C13.3228 5.23958 13.4452 5.38542 13.5338 5.5625C13.6223 5.73958 13.6666 5.92708 13.6666 6.125V14.25C13.6666 14.5938 13.5442 14.888 13.2994 15.1328C13.0546 15.3776 12.7603 15.5 12.4166 15.5H8.66658V9.66667H5.33325V15.5H1.58325Z"
        fill={inheritColor ? "inherit" : color ? color : "#858089"}

      />
    </svg>
  );
}

export default ApartmentIcon;
