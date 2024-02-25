import React from "react";
import styles from "./All_buttons.module.css";

function All_buttons({ changestate }) {
  var btnarr = [
    "C",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",

    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  return (
    <>
      {btnarr.map((eachbtn) => (
        <button onClick={changestate} className={styles.eachbtn}>
          {eachbtn}
        </button>
      ))}
    </>
  );
}

export default All_buttons;
