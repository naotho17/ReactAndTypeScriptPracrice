import { TodoType } from "./types/todo";

// Pickを使って、TodoTypeの中から使うプロパティだけを指定できる
export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
  // <Omit<Todotype, "id">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザー:${userId})`}</p>;
};
