import { useState } from "react";
import style from './Greeting.module.scss';

export function Greeting() {
  const [Name, setName] = useState("Kaj");

  function handleName(event) {
    if ((event.target.value === "")) {
      setName("Kaj");
    } else {
      setName(event.target.value);
    }
  }

  return (
    <div className={style.greetingStyling}>
      <h2>Send en hilsen til {Name}</h2>
      <input
        type="text"
        placeholder="Hvem skal din hilsen være til?"
        onInput={handleName}
      />
    </div>
  );
}
