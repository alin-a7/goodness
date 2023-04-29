import Layout from "@/components/Layout";
import { useAppSelector } from "@/store/hooks";

import styles from "../styles/HomePage.module.scss";

const Profile = () => {
  const { currentUser } = useAppSelector((store) => store.app);

  return (
    <Layout>
      {currentUser._id ? (
        <>
          <div>Profile</div>
          <h1>{currentUser?.name}</h1>
        </>
      ) : (
        <h1 className={styles.register}>Register or log in to use the app</h1>
      )}
    </Layout>
  );
};

export default Profile;
