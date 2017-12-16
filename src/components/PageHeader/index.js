import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Tags from "./Tags";
import News from "./News";

import style from "./style.scss"; 

const PageHeader = () => (
  <header id="page-header">
    <div>
      <Logo/>
      <Tags />
      <News/>
    </div>
  </header>
);

export default PageHeader; 