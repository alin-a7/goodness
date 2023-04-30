import { useAppSelector } from "@/store/hooks";
import { RatingDto, UpdateDeedDto } from "@/store/types";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpgradeRatingMutation,
} from "@/store/api/userApi";

import styles from "./Todo.module.scss";

interface TodoProps {
  _id: string;
  authorId: string[];
  index: number;
  text: string;
  isDone: boolean;
  comments: string[];
}

const Todo = ({ index, text, isDone, comments, authorId, _id }: TodoProps) => {
  const { currentUser } = useAppSelector((store) => store.app);
  const isAuthor = currentUser._id === authorId[0];

  const [deleteTodo] = useDeleteTodoMutation();
  const handleDelete = async () => {
    await deleteTodo(_id);
  };

  const [updateTodo] = useUpdateTodoMutation();
  const [ratingUpgrade] = useUpgradeRatingMutation();

  const handleDone = async () => {
    const updateDeedDto: UpdateDeedDto = {
      isDone: !isDone,
      text: text,
      id: _id,
    };
    const ratingDto: RatingDto = {
      id: currentUser._id,
      increase: !isDone,
    };
    await ratingUpgrade(ratingDto);
    await updateTodo(updateDeedDto);
  };

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
          <button className={styles.button}>Update</button>
          <button className={styles.button} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
