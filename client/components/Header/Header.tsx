import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { NAVIGATION_MENU } from "./constants";
import { useAppSelector } from "@/store/hooks";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const { currentUser } = useAppSelector((store) => store.app);

  const { pathname } = useRouter();

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navLink}>
          {NAVIGATION_MENU.map(({ href, label }, index) => (
            <Link
              key={index}
              className={`${styles.menuItem} ${
                pathname === href ? styles.active : null
              } `}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/registration" className={styles.singUp}>
          {!currentUser._id ? "Sing Up" : "Log out"}
        </Link>
      </nav>
    </header>
  );
};
export default Header;
