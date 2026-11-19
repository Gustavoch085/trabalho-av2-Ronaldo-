// card de um aluno, recebe nome e curso por props
export default function AlunoCard({ nome, curso }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>Curso: {curso}</p>
    </div>
  );
}
