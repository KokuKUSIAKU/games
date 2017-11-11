import React from "react";
import { render } from "react-dom";
import LandingPage from "./views/LandingPage";
console.log("start");

if (process.env.ENV !== "production") {
  console.log('working in dev');
}
var app = document.getElementById("app");
render(
  <LandingPage />,
  app
);


