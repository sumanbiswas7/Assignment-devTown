import styles from "./navbar.module.css";

export function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <img src="/logo-flexwatch.svg" className={styles.logo} />
      <div className={styles.bottom_gradient} />
    </nav>
  );
}
