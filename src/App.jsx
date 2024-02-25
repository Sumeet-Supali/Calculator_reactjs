import React, { useState } from "react";
import Screen from "./components/Screen";
import styles from "./App.module.css";
import All_buttons from "./components/All_buttons";
import btn from "./components/All_buttons.module.css";

function App() {
  let [disp, setdisp] = useState("");
  const clickhandler = (e) => {
    let what_value = e.target.innerHTML;
    // console.log(what_value);
    if (what_value == "=") {
      let result = eval(disp);
      setdisp("");
      setdisp(result);
    } else if (what_value == "C") {
      setdisp("");
    } else {
      const merge = disp + what_value;
      setdisp(merge);
    }
  };

  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.box}>
          <Screen disp={disp} />
          <div className={btn.buttonbox}>
            <All_buttons changestate={clickhandler} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
