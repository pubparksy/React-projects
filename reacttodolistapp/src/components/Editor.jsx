import { useState,useRef} from "react";
import "./Editor.css";

const Editor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();  

  const onChangeContent = (e) => {
      setContent(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
      if(content === "") {
        alert("할 일을 입력해주세요");
        contentRef.current.focus(); 
        return;
      }
      onCreate(content);
      setContent("");
  }

  return (
    <div className="Editor">
      <h3>➕ 추가</h3>
      <div className="Editor2">
        <input
          ref={contentRef} 
          value={content}
          onKeyDown={onKeyDown}
          onChange={onChangeContent} 
          placeholder="빵 사기"/>
        <button onClick={onSubmit}>⬇︎</button>
      </div>
      
    </div>
  )
}

export default Editor;