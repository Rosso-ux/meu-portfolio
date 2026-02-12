import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section id="contato" className={styles.container}>
      <h2>Contato</h2>

      <form className={styles.form}>
        <input className={styles.input} placeholder="Nome" />

        <input className={styles.input} placeholder="Email" />

        <textarea className={styles.input} placeholder="Mensagem" />

        <button className={styles.botao}>Enviar</button>
        <div>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Rosso-ux"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Rosso-ux
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
