import styles from "./Habilidades.module.css";

export default function Habilidades() {
  const habilidades = [
    "JavaScript moderno (ES6+), ",
    "React e criação de componentes, ",
    "CSS e estilização de interfaces, ",
    "HTML e estruturação de páginas, ",
    "Arquitetura Micro Frontends, ",
    "Webpack 5 e Module Federation, ",
    "Next.js, ",
    "Lazy Loading e performance, ",
    "Git/GitHub.",
  ];

  return (
    <section id="habilidades" className={styles.container}>
      <h2>Habilidades</h2>

      <div className={styles.lista}>
        {habilidades.map((hab) => (
          <span key={hab} className={styles.item}>
            {hab}
          </span>
        ))}
      </div>
    </section>
  );
}
