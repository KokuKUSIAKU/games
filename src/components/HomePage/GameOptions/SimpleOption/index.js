import React from "react";
import OPTIONS from "../constants";
import OptionCard from "../OptionCard";

const SimpleOption = () => (
  <OptionCard option={OPTIONS.simple}
    controller={SimpleOptionController} />
);

const SimpleOptionController = () => {
  alert("simple version fired");
};

export default SimpleOption; 