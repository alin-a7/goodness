import { Deed } from "@/store/types";
import Todo from "../Todo";

import styles from "./TodoList.module.scss";

interface TodoListProps {
  todoList: Deed[];
}

const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <div className={styles.todoList}>
      {todoList.map((todo, index) => (
        <Todo key={index} index={index} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
