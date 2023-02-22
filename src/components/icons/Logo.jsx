import React from "react";

export default function Logo({ className = "text-black", size = 24 }) {
  return (
    <svg
      width={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6005 5.67333H15.5361L17.1251 8.39682L18.6005 5.67333Z"
        fill="currentColor"
      />
      <path
        d="M22.8593 21.047L11.9811 2.94984L1.13919 21.0091H6.94593C7.72069 21.0091 8.48283 20.8135 9.1566 20.4427C9.88402 20.0419 10.4331 19.4612 10.8623 18.7574C11.3641 17.9338 11.8517 17.1006 12.3456 16.2722L13.6095 14.1515L11.9795 11.4201L11.2568 12.583C10.4331 13.9606 9.65364 15.3696 8.79999 16.7282C8.3708 17.4099 7.81063 18.0537 6.9838 18.2194C6.85915 18.2446 6.73134 18.2572 6.60353 18.262C6.43311 18.2683 6.2627 18.2651 6.09386 18.2651L11.9811 8.23903L19.5409 21.047H22.8593Z"
        fill="black"
      />
    </svg>
  );
}
