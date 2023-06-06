import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAppSelector } from "@/store/hooks";
import Logo from "@/assets/logo.svg";
import Avatar from "@/assets/avatar.svg";

import styles from "./Header.module.scss";

const NAVIGATION_MENU = [
  {
    href: "/",
    label: <Logo />,
  },
  {
    href: "/",
    label: "My profile",
  },
  {
    href: "/users",
    label: "All users",
  },
];

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
        <div className={styles.rightPanel}>
          <Link href='/' className={styles.user}>
            <Avatar />
            <div>{currentUser.name}</div>
          </Link>
          <Link href="/registration" className={styles.singUp}>
            {!currentUser._id ? "Sing Up" : "Log out"}
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
