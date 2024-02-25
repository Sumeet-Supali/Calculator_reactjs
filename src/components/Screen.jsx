import React from "react";
import styles from "./Screen.module.css";

function Screen({ disp }) {
  return (
    <>
      <input
        type="text"
        placeholder="2+2"
        value={disp}
        className={styles.display}
        readOnly
      ></input>
    </>
  );
}

export default Screen;
