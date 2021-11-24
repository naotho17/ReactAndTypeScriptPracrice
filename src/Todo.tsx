import { VFC } from "react";
import { TodoType } from "./types/todo";

// Pickを使って、TodoTypeの中から使うプロパティだけを指定できる
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザー:${userId})`}</p>;
};
