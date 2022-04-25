import { forwardRef } from "react";

interface PropsType {
  color: string;
}

const DiarySVG = forwardRef<SVGSVGElement, PropsType>(({ color }, ref) => {
  return (
    <svg
      ref={ref}
      width="100"
      height="42"
      viewBox="0 0 100 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0615 2.40558C28.6018 0.865311 30.6908 0 32.8691 0H91.7704C99.0875 0 102.752 8.84674 97.578 14.0207L72.9385 38.6602C71.3982 40.2005 69.3092 41.0658 67.1309 41.0658H8.22963C0.912482 41.0658 -2.75196 32.2191 2.42204 27.0451L27.0615 2.40558Z"
        fill={color}
      />
    </svg>
  );
});

DiarySVG.displayName = "DiarySVG";

export default DiarySVG;
