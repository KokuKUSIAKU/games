import React from "react";
import { render } from "react-dom";

import HOME from "./components/HomePage";

var app = document.getElementById("app");
render(
  <main id="main">
    <HOME/>
  </main>,
  app
);


