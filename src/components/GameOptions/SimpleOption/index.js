import React from "react";
import OPTIONS from "../constants";
import OptionCard from "../OptionCard";
import  setSimpleOption from "./action"; 
import store from "../../../state";

const SimpleOption = () => (
  <OptionCard option={OPTIONS.simple}
    controller={SimpleOptionController} />
);

const SimpleOptionController = () => {
  store.dispatch(setSimpleOption()); 
};

export default SimpleOption; 