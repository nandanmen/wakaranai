import React from "react";

export function DotBackground() {
  const id = React.useId();
  return (
    <svg className="absolute inset-0" width="100%" height="100%">
      <defs>
        <pattern
          id={id}
          width="25"
          height="25"
          viewBox="0 0 10 10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1" className="fill-gray2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
