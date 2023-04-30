import { Deed } from "@/store/types";
import { useUserCard } from "./hooks";

import styles from "./UserCard.module.scss";

interface UserCardProps {
  _id: string;
  name: string;
  friends: string[];
  deedList: Deed[];
  rate: number;
}

const UserCard = ({ name, friends, deedList, rate, _id }: UserCardProps) => {
  const { isDisabled, isFollowButton, isFriend, handleChangeFollow, push } =
    useUserCard(_id);

  return (
    <div className={styles.card}>
      <h2 className={styles.cardItem}>{name}</h2>
      <div className={styles.cardItem}>Friends: {friends?.length}</div>
      <div className={styles.cardItem}>Number of todos: {deedList?.length}</div>
      <div className={styles.cardItem}>Rate: {rate}</div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.button}
          onClick={() => push(`/users/${_id}`)}
          disabled={isFollowButton && !isFriend}
        >
          Details
        </button>
        {isFollowButton && (
          <button
            className={styles.button}
            disabled={!isDisabled}
            onClick={handleChangeFollow}
          >
            {isFriend ? "Unwollow" : "Follow"}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
