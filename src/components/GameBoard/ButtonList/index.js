import React from "react";
import Button from "../Button";

const ButtonList = ({ dim, row }) => (
  <div className="cards">
    <ul className="card-list"
      data-row={row}>
      {
        Array(dim).fill(undefined).map(
          (val, index) => <li key={index}>
            <Button row={row} column={index} />
          </li>
        )
      }
    </ul>
  </div>
);
export default ButtonList; 
