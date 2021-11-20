import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  // useStateの<>の中に型を指定してあげる
  const [todos, setTodos] = useState<any>([]);

  // axiosで取ってきて、成功したら(then)setTodosの中にdataを入れとく
  const onClickFetchData = () => {
    axios
      .get<Array<Todotype>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {/* todoの中のtitleを取ってくる */}
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
