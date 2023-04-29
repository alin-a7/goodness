import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import TodoList from "@/components/TodoList";

import {
  getRunningQueriesThunk,
  getUser,
  useGetUserQuery,
} from "@/store/api/userApi";
import { wrapper } from "@/store/store";
import { Deed } from "@/store/types";


import styles from "./UsersPage.module.scss";

const UserDetails = () => {
  const router = useRouter();
  const userId = router.query.id;
  const { data: user } = useGetUserQuery(userId as string);

  return (
    <Layout>
      <div className={styles.userWrapper}>
        <h1 className={styles.userName}>{user?.name}</h1>
        <TodoList todoList={user?.deedList as Deed[]}/>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getUser.initiate(context.query.id as string));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default UserDetails;
