import Link from "next/link";

// tela inicial, um bloco pra cada recurso com o link pra página dele
export default function Home() {
  return (
    <main>
      <h1>Sistema Acadêmico</h1>

      <div className="menu">
        <div className="opcao">
          <h2>Alunos</h2>
          <Link href="/alunos">Visualizar</Link>
        </div>

        <div className="opcao">
          <h2>Cursos</h2>
          <Link href="/cursos">Visualizar</Link>
        </div>

        <div className="opcao">
          <h2>Professores</h2>
          <Link href="/professores">Visualizar</Link>
        </div>
      </div>
    </main>
  );
}
