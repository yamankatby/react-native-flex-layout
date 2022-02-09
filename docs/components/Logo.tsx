import React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0H30C34.4183 0 38 3.58172 38 8C38 12.4183 34.4183 16 30 16H0V0Z" fill="#6366F1" />
      <path d="M0 50L-8.74228e-07 30C-1.06736e-06 25.5817 3.58172 22 8 22C12.4183 22 16 25.5817 16 30L16 50L0 50Z"
            fill="#EC4899" />
      <circle cx="30" cy="30" r="8" fill="#3B82F6" />
    </svg>
  )
}

export default Logo
