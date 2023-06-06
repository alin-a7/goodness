import Layout from "@/components/Layout";
import ProfileInfo from "@/components/ProfileInfo";
import TodoList from "@/components/TodoList";

import { useAppSelector } from "@/store/hooks";
import { Deed, User } from "@/store/types";
import { useGetUserQuery } from "@/store/api/appApi";
import CreateTodoForm, { Dto } from "@/components/CreateTodoForm";

import styles from "../styles/HomePage.module.scss";

const Profile = () => {
  const { currentUser } = useAppSelector((store) => store.app);

  const dto: Dto = {
    id: currentUser._id,
    text: "",
  };
  const isClient = typeof window !== "undefined";
  isClient &&
    window.addEventListener("beforeunload", () =>
      localStorage.setItem("userId", currentUser._id)
    );

  return (
    <Layout>
      <>
        {currentUser?._id ? (
          <div className={styles.wrapper}>
            <div className={styles.profileHeader}>
              <ProfileInfo {...(currentUser as User)} />
              <CreateTodoForm dto={dto} />
            </div>
            <TodoList todoList={currentUser?.deedList as Deed[]} />
          </div>
        ) : (
          <h1 className={styles.register}>Register or log in to use the app</h1>
        )}
      </>
    </Layout>
  );
};

export default Profile;
