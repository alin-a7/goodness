import { useModal } from "@/hooks/useModal";

import Modal from "../Modal";
import { UpdateTodoForm } from "../UpdateForm";
import { useTodo } from "./hooks";
import CreateCommentForm from "../CreateCommentForm";
import CommentList from "../CommentList";
import { Comment } from "@/store/types";
import Delete from "@/assets/delete.svg";
import Update from "@/assets/update.svg";
import Done from "@/assets/done.svg";
import NotDone from "@/assets/notDone.svg";

import styles from "./Todo.module.scss";

export interface TodoProps {
  _id: string;
  authorId: string[];
  index: number;
  text: string;
  isDone: boolean;
  comments: Comment[];
}

const Todo = (props: TodoProps) => {
  const { index, text, isDone, comments, _id } = props;

  const {
    isAuthor,
    handleDone,
    handleDelete,
    showComments,
    changeShow,
    createCommentDto,
  } = useTodo(props);

  const { isVisible, open: openModal, close: closeModal } = useModal();

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <div className={styles.content}>
          {index + 1}. {text}
        </div>
        <div className={styles.comments} onClick={changeShow}>
          Comments: {comments.length}
        </div>
        {isDone ? (
          <div className={styles.done}>Done!</div>
        ) : (
          <div className={styles.notDone}>Not done...</div>
        )}
        {isAuthor && (
          <div className={styles.btnWrapper}>
            {isDone ? (
              <NotDone className={styles.notDone} onClick={handleDone} />
            ) : (
              <Done className={styles.done} onClick={handleDone} />
            )}

            <Update onClick={openModal} />
            <Delete onClick={handleDelete} />
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
      {showComments && (
        <>
          <CommentList commentList={comments} />
          <CreateCommentForm dto={createCommentDto} />
        </>
      )}
    </div>
  );
};

export default Todo;
