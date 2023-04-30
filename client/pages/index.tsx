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
  const { data: me, isLoading } = useGetUserQuery(currentUser._id);

  const dto: Dto = {
    id: currentUser._id,
    text: "",
  };

  return (
    <Layout>
      {currentUser._id ? (
        <div className={styles.wrapper}>
          <div className={styles.profileHeader}>
            <ProfileInfo {...(me as User)} />
            <CreateTodoForm dto={dto} />
          </div>
          <TodoList todoList={me?.deedList as Deed[]} isLoading={isLoading}/>
        </div>
      ) : (
        <h1 className={styles.register}>Register or log in to use the app</h1>
      )}
    </Layout>
  );
};

export default Profile;
