import { useModal } from "@/hooks/useModal";

import Modal from "../Modal";
import { UpdateTodoForm } from "../UpdateForm";
import { useTodo } from "./hooks";

import styles from "./Todo.module.scss";

export interface TodoProps {
  _id: string;
  authorId: string[];
  index: number;
  text: string;
  isDone: boolean;
  comments: string[];
}

const Todo = (props: TodoProps) => {
  const { index, text, isDone, comments, _id } = props;

  const { isAuthor, handleDone, handleDelete } = useTodo(props);
  const { isVisible, open: openModal, close: closeModal } = useModal();

  return (
    <div className={styles.todo}>
      <div className={styles.content}>
        {index + 1}. {text}
      </div>
      <div className={styles.comments}>Comments: {comments.length}</div>
      {isDone ? (
        <div className={styles.done}>Done!</div>
      ) : (
        <div className={styles.notDone}>Not done...</div>
      )}
      {isAuthor && (
        <div className={styles.btnWrapper}>
          <button className={styles.button} onClick={handleDone}>
            Done!
          </button>
          <button className={styles.button} onClick={openModal}>
            Update
          </button>
          <button className={styles.button} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
      {isVisible && (
        <Modal
          close={closeModal}
          content={
            <UpdateTodoForm
              dto={{ id: _id, text: text, isDone: isDone }}
              closeModal={closeModal}
            />
          }
        />
      )}
    </div>
  );
};

export default Todo;
