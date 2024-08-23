import { useState } from "react";
import style from './Button.module.scss'

export function Button() {
  const [Click, setClick] = useState(0);

  function handleClick() {
    setClick(Click + 1);
  }

  return (
    <div className={style.buttonStyle}>
      <h2>Du har klikket på knappen {Click} antal gange</h2>
      <button onClick={handleClick}>Klik på mig!</button>
    </div>
  );
}
