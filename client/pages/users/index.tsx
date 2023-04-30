import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import {
  getAllUser,
  getRunningQueriesThunk,
  useGetAllUserQuery,
} from "@/store/api/appApi";
import { wrapper } from "@/store/store";

import UserCard from "../../components/UserCard";

import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  const router = useRouter();
  const { data: users } = useGetAllUserQuery();
  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.cardWrapper}>
          {users?.map((user) => (
            <UserCard key={user._id} {...user} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getAllUser.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default UsersPage;
