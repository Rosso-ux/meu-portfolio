import styles from "./Projetos.module.css";

export default function Projetos() {
  const projetos = [
    {
      nome: "Portal de Conteúdo",
      descricao:
        "Aplicação desenvolvida em React com foco em performance, utilizando lazy loading para carregamento otimizado dos componentes e páginas.",
      tecnologias: "JavaScript, CSS, React, Lazy Loading",
      link: "https://github.com/Rosso-ux/portal/tree/master",
    },

    {
      nome: "Micro Frontends com Module Federation",
      descricao:
        "Projeto utilizando arquitetura de Micro Frontends com Webpack 5 e Module Federation, integrando aplicações independentes em um container principal.",
      tecnologias:
        "JavaScript, React, Webpack 5, Module Federation, Babel, Webpack Dev Server",
      link: "https://github.com/Rosso-ux/micro-frontends-mf",
    },

    {
      nome: "Blog em Next.js",
      descricao:
        "Blog desenvolvido com React e Next.js para exibição de artigos dinâmicos a partir de estrutura de dados interna.",
      tecnologias: "JavaScript, CSS, React, Next.js",
      link: "https://github.com/Rosso-ux/blog-next.js",
    },
  ];

  return (
    <section id="projetos" className={styles.container}>
      <h2 className={styles.titulo}>Projetos</h2>

      {projetos.map((p) => (
        <div key={p.nome} className={styles.card}>
          <h3>{p.nome}</h3>

          <p>{p.descricao}</p>

          <p className={styles.tecnologias}>
            <strong>Tecnologias:</strong> {p.tecnologias}
          </p>

          <a
            className={styles.link}
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            Ver repositório
          </a>
        </div>
      ))}
    </section>
  );
}
