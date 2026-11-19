// card de um curso, recebe nome e duracao por props
export default function CursoCard({ nome, duracao }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>Duração: {duracao}</p>
    </div>
  );
}
