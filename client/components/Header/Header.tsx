import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { NAVIGATION_MENU } from "./constants";

import styles from "./Header.module.scss";

const Header: FC = () => {
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
          Sing Up
        </Link>
      </nav>
    </header>
  );
};
export default Header;
