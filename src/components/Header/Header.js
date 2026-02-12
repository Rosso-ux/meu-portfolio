import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Guilherme Rosso</h1>

      <nav className={styles.nav}>
        <a className={styles.link} href="#sobre">
          Sobre
        </a>
        <a className={styles.link} href="#projetos">
          Projetos
        </a>
        <a className={styles.link} href="#habilidades">
          Habilidades
        </a>
        <a className={styles.link} href="#contato">
          Contato
        </a>
      </nav>
    </header>
  );
}
