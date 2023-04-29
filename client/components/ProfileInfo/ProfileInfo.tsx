import { User } from "@/store/types";

import styles from "./ProfileInfo.module.scss";

const ProfileInfo = ({ name, friends, deedList, rate }: User) => {

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
        <button className={styles.button}>Delete</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
