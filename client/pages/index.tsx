import Layout from '@/components/Layout';

import { useAppSelector } from '@/store/hooks';
import { useGetUserQuery } from '@/store/api/userApi';

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { currentUserId } = useAppSelector((store) => store.app);
  const { data: currentUser } = useGetUserQuery(currentUserId);

  return (
    <Layout>
      {currentUserId ? (
        <>
          <div>Good Deeds</div>
          <h1>{currentUser?.name}</h1>
        </>
      ) : (
        <h1 className={styles.register}>Register or log in to use the app</h1>
      )}
    </Layout>
  );
}

export default HomePage
