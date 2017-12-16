import React from "react"; 

const TagCard = ({ text, icon }) => (
  <div className="tag-card">
    <div>{React.createElement(icon)}</div>
    <div>{text}</div>
  </div>
);

export default TagCard; 