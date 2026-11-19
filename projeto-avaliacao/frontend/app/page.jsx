import Link from "next/link";

// tela inicial, só os links pras outras páginas
export default function Home() {
  return (
    <main>
      <h1>Sistema Acadêmico</h1>
      <p>Escolha uma opção:</p>

      <div className="menu">
        <Link href="/alunos">Alunos</Link>
        <Link href="/cursos">Cursos</Link>
        <Link href="/professores">Professores</Link>
      </div>
    </main>
  );
}
