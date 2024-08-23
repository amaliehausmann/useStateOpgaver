import style from "./TaskSection.module.scss";

export function TaskSection(props) {
  return (
    <div>
      <h2 className={style.taskStyling}>{props.title}</h2>
      {props.children}
    </div>
  );
}
