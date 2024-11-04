import "./TodoItem.css"
import { useState } from "react";

const TodoItem = ({id,isDone,content,date, onUpdate, onDelete}) => {
  const [doneState, setDoneState] = useState("");

  const onChangeCheckBox = () => {
    onUpdate(id);
    if(!isDone) {
      document.getElementById(id).classList.add("doneColor");
    } else {
      document.getElementById(id).classList.remove("doneColor");
    }
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input 
        type="checkbox" 
        checked={isDone} 
        onChange={onChangeCheckBox}/>
      <div 
        className="content"
        id={id}
      >{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>➖</button>
    </div>
  )
}

export default TodoItem;