import { useRouter } from "next/router";

import { useActions, useAppSelector } from "@/store/hooks";
import { useChangeFollowMutation } from "@/store/api/userApi";
import { SuccessFetch, changeFollowDto } from "@/store/types";
import { Deed } from "@/store/types";

import styles from "./UserCard.module.scss";

interface UserCardProps {
  _id: string;
  name: string;
  friends: string[];
  deedList: Deed[];
  rate: number;
}

const UserCard = ({ name, friends, deedList, rate, _id }: UserCardProps) => {
  const { push } = useRouter();
  const [changeFollow] = useChangeFollowMutation();

  const { currentUser } = useAppSelector((store) => store.app);
  const { setCurrentUser } = useActions();

  const isFriend = currentUser.friends?.includes(_id);
  const isDisabled = !!currentUser._id;
  const isFollowButton = currentUser._id !== _id;

  const handleChangeFollow = async () => {
    const changeFollowDto: changeFollowDto = {
      myId: currentUser._id,
      friendId: _id,
    };

    const result = (await changeFollow(changeFollowDto)) as SuccessFetch;
    setCurrentUser(result.data);
  };

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