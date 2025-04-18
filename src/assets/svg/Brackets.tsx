import React from "react";

interface BracketsProps {
  position: "left" | "right";
}

const Brackets: React.FC<BracketsProps> = ({ position }) => {
  return position === "left" ? (
    <svg
      width="5"
      height="14"
      viewBox="0 0 5 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0.822H1V12.822H5" stroke="url(#brackets-left)" />
      <defs>
        <linearGradient id="brackets-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="5"
      height="14"
      viewBox="0 0 5 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.822H4V12.822H0" stroke="url(#brackets-right)" />
      <defs>
        <linearGradient id="brackets-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Brackets;
