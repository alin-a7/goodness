import Layout from "@/components/Layout";
import { useGetUserQuery } from "@/store/api/userApi";
import { useAppSelector } from "@/store/hooks";

import styles from "./ProfilePage.module.scss";

const Profile = () => {
  const { currentUserId } = useAppSelector((store) => store.app);
  const { data: currentUser } = useGetUserQuery(currentUserId);

  return (
    <Layout>
      {currentUserId ? (
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
