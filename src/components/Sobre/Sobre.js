import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.container}>
      <div className={styles.perfil}>
        <img
          className={styles.foto}
          src="/Guilherme.png"
          alt="Foto de perfil"
        />

        <p className={styles.cargo}>Desenvolvedor Front-end</p>
      </div>

      <p className={styles.texto}>
        Desenvolvedor Front-end com foco em JavaScript e React. Tenho
        experiência com criação de interfaces componentizadas, lazy loading e
        arquitetura modular. Busco minha primeira oportunidade para evoluir
        tecnicamente e contribuir com projetos reais.
      </p>
    </section>
  );
}
