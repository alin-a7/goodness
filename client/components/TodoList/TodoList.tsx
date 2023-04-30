import { Deed } from "@/store/types";
import Todo from "../Todo";

import styles from "./TodoList.module.scss";

interface TodoListProps {
  todoList: Deed[];
  isLoading?: boolean;
}

const TodoList = ({ todoList, isLoading }: TodoListProps) => {
  return isLoading ? (
    <div className={styles.loading}>Loading...</div>
  ) : (
    <div className={styles.todoList}>
      {todoList?.length ? (
        todoList.map((todo, index) => (
          <Todo key={index} index={index} {...todo} />
        ))
      ) : (
        <h2 className={styles.notFound}>Todo not found</h2>
      )}
    </div>
  );
};

export default TodoList;
