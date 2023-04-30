import { Comment, CreateCommentDto } from "@/store/types";
import CreateCommentForm from "../CreateCommentForm/CreateCommentForm";

import styles from "./CommentList.module.scss";

interface TodoListProps {
  commentList: Comment[];
}

const CommentList = ({ commentList }: TodoListProps) => {

  return (
    <div className={styles.commentList}>
      {commentList.length ? (
        commentList.map(({ author, text }, index) => (
          <div key={index} className={styles.comment}>
            <div className={styles.name}>{author}</div>
            <div className={styles.text}>{text}</div>
          </div>
        ))
      ) : (
        <div className={styles.noComments}> No comments</div>
      )}
    </div>
  );
};

export default CommentList;
