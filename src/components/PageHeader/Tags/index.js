import React from "react";
import style from "./style.scss";
import HeartIcon from "./HeartIcon"; 
import ComingSoon from "./ComingSoon"; 
import TagCard from "./TagCard"; 

const Tags = () => (
  <div id="header-tags">
    <ul id="features" >
      <li><TagCard text="Online" icon={HeartIcon}/></li>
      <li><TagCard text="Free" icon={HeartIcon}/></li>
    </ul>
  </div>
);

export default Tags; 