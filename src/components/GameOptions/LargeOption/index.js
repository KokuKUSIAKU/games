import React from "react";
import OPTIONS from "../constants";
import OptionCard from "../OptionCard";
import  setLargeOption from "./action"; 
import store from "../../../state";

const LargeOption = () => (
  <OptionCard option={OPTIONS.large}
    controller={LargeOptionController} />
);

const LargeOptionController = () => {
  store.dispatch(setLargeOption()); 
};

export default LargeOption; 