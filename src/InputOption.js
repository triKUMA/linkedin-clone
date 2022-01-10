import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, colour }) {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{ color: colour }} />}
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
