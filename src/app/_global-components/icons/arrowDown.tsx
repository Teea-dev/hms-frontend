import React from "react";
import { IconTypes } from "./types";
function ArrowDown({
  width = 8,
  height = 5,
  color = "",
  inheritColor = false,
}: IconTypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.69607 5.54425L4.69613 5.5443C4.7756 5.61986 4.88857 5.66651 5.01138 5.66659L4.69607 5.54425ZM4.69607 5.54425L0.962737 1.99596L0.962789 1.99591M4.69607 5.54425L0.962789 1.99591M0.962789 1.99591L0.9564 1.99004M0.962789 1.99591L0.9564 1.99004M0.9564 1.99004C0.916025 1.95298 0.885322 1.91005 0.864742 1.86452C0.844196 1.81906 0.833794 1.77118 0.833358 1.72346C0.832922 1.67574 0.842445 1.62778 0.862102 1.58212C0.881789 1.53638 0.911608 1.49309 0.951168 1.45549C0.990783 1.41784 1.03928 1.38678 1.09446 1.36532C1.14968 1.34385 1.20965 1.33276 1.27066 1.33327C1.33166 1.33377 1.39136 1.34584 1.44606 1.36818C1.50073 1.3905 1.54852 1.42227 1.58731 1.46045L1.58726 1.4605M0.9564 1.99004L1.58726 1.4605M1.58726 1.4605L1.59355 1.46649M1.58726 1.4605L1.59355 1.46649M1.59355 1.46649L4.66702 4.38761L5.01148 4.715M1.59355 1.46649L5.01148 4.715M5.01148 4.715L5.35594 4.38761M5.01148 4.715L5.35594 4.38761M5.35594 4.38761L8.42564 1.47006C8.50573 1.39778 8.61715 1.35408 8.73732 1.35507C8.85878 1.35607 8.97023 1.40256 9.04885 1.47729C9.12665 1.55124 9.16581 1.6458 9.16666 1.73899C9.16751 1.83113 9.13094 1.925 9.05646 1.99954L5.32689 5.54425L5.32683 5.5443M5.35594 4.38761L5.32683 5.5443M5.32683 5.5443C5.24736 5.61986 5.13439 5.66651 5.01158 5.66659L5.32683 5.5443Z"
        fill={inheritColor ? "inherit" : color ? color : "#585A60"}        stroke="#585A60"
      />
    </svg>
  );
}

export default ArrowDown;