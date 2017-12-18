import React from "react";

const Flag = () => (
  <svg id="flag" width="100" height="150" transform="rotate(30)">
    <path d="M4 146, 4 35, 35 4, 65 4, 96 35, 96 146 z "
      fill="rgba(255,255,255,0.95)"
      stroke="darkblue"
      strokeWidth="1" />
    <text x="10" y="100" fill="darkblue" >
      Coming
      <tspan x="10" y="100" dy="20" >Soon</tspan>
    </text>
  </svg>
);

export default Flag;