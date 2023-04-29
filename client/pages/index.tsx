import Layout from '@/components/Layout';

import { useAppSelector } from '@/store/hooks';
import { useGetUserQuery } from '@/store/api/userApi';

import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
  const { currentUser } = useAppSelector((store) => store.app);

  return (
    <Layout>
      {currentUser._id ? (
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
