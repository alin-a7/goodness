import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>© 2023</div>
      <Link href="https://github.com/alin-a7" target="_blank" rel="noreferrer">
        Designer: Alina M
      </Link>
    </footer>
  );
};
export default Footer;
