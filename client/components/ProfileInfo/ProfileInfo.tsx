import { User } from "@/store/types";
import { useDeleteUserMutation } from "@/store/api/userApi";
import { useRouter } from "next/router";
import { useModal } from "@/hooks/useModal";

import Modal from "../Modal";
import { UpdateUserForm } from "../UpdateForm";

import styles from "./ProfileInfo.module.scss";

const ProfileInfo = ({ name, friends, deedList, rate, _id }: User) => {
  const [deleteUser] = useDeleteUserMutation();

  const { push } = useRouter();

  const { isVisible, open: openModal, close: closeModal } = useModal();

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
        <button className={styles.button} onClick={openModal}>
          Update
        </button>
        <button className={styles.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
      {isVisible && (
        <Modal
          close={closeModal}
          content={
            <UpdateUserForm
              dto={{ id: _id, name: name }}
              closeModal={closeModal}
            />
          }
        />
      )}
    </div>
  );
};

export default ProfileInfo;
