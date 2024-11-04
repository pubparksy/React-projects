import { useState,useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const testData = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date: "2024.5.19",
  },
  {
    id:1,
    isDone: false,
    content: "Linux 가동하기",
    date: "2024.5.18",
  },
  {
    id:2,
    isDone: false,
    content: "파이썬 수정하기",
    date: "2024.5.18",
  },  
]

function App() {
  const [todos, setTodos] = useState(testData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetID) => { 
    setTodos(todos.map((todo)=>{
      if(todo.id === targetID) {
        return {...todo, isDone: !todo.isDone}
      }
      return todo;
    }));
  }

  const onDelete = (targetID) => { 
    setTodos(todos.filter((todo)=>{
      return todo.id !== targetID;
    }));
  };

  return (
      <div className='App'>
        <Header/>
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
  )
}

export default App
