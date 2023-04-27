import { FC } from "react";
import { useRouter } from "next/router";

import { NAVIGATION_MENU } from "./constants";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navLink}>
          {NAVIGATION_MENU.map(({ href, label }, index) => (
            <div
              key={index}
              className={`${styles.menuItem} ${
                path === href ? styles.active : null
              } `}
              onClick={() => router.push(href)}
            >
              {label}
            </div>
          ))}
        </div>
        <div className={styles.singUp}>Sing Up</div>
      </nav>
    </header>
  );
};
export default Header;
