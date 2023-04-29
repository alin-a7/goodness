import Layout from "@/components/Layout";
import ProfileInfo from "@/components/ProfileInfo";
import TodoList from "@/components/TodoList";

import { useAppSelector } from "@/store/hooks";
import { Deed, User } from "@/store/types";
import { useCreateTodoMutation, useGetUserQuery } from "@/store/api/userApi";

import styles from "../styles/HomePage.module.scss";
import CreateForm, { Dto } from "@/components/CreateForm";

const Profile = () => {
  const { currentUser } = useAppSelector((store) => store.app);
  const { data: me } = useGetUserQuery(currentUser._id);

  const [createTodo] = useCreateTodoMutation()

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
            <CreateForm
              title="Create a new TODO!"
              dto={dto}
              fn={createTodo}
            />
          </div>
          <TodoList todoList={me?.deedList as Deed[]} />
        </div>
      ) : (
        <h1 className={styles.register}>Register or log in to use the app</h1>
      )}
    </Layout>
  );
};

export default Profile;
