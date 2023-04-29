import Layout from "@/components/Layout";
import {
  getAllUser,
  getRunningQueriesThunk,
  useGetAllUserQuery,
} from "@/store/api/userApi";
import { wrapper } from "@/store/store";
import { useRouter } from "next/router";

const UsersPage = () => {
  const router = useRouter();
  const { data: users } = useGetAllUserQuery();
  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        users?.map((user) => <div key={user.email}>{user.name}</div>)
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
