import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";

export default function App() {
  // useStateの<>の中に型を指定してあげる
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  // axiosで取ってきて、成功したら(then)setTodosの中にdataを入れとく
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>

      {/* todoの中のtitleを取ってくる */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
