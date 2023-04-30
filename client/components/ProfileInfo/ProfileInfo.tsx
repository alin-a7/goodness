import { User } from "@/store/types";
import { useDeleteUserMutation } from "@/store/api/userApi";

import styles from "./ProfileInfo.module.scss";
import { useRouter } from "next/router";

const ProfileInfo = ({ name, friends, deedList, rate, _id }: User) => {
  const [deleteUser] = useDeleteUserMutation();

  const { push } = useRouter();

  const handleDelete = async () => {
    await deleteUser(_id);
    push("/registration");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hello, {name}</h1>
      <div className={styles.info}>
        <div className={styles.cardItem}>Friends: {friends?.length}</div>
        <div className={styles.cardItem}>
          Number of todos: {deedList?.length}
        </div>
        <div className={styles.cardItem}>Rate: {rate}</div>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.button}>Update</button>
        <button className={styles.button} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
