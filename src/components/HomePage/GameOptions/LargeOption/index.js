import React from "react";
import OPTIONS from "../constants";
import OptionCard from "../OptionCard";

const LargeOption = () => (
  <OptionCard option={OPTIONS.large}
    controller={LargeOptionController} />
);

const LargeOptionController = () => {
  alert("Large version fired");
};

export default LargeOption; 