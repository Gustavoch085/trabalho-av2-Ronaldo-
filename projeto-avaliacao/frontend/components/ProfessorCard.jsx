// card de um professor, recebe nome e area por props
export default function ProfessorCard({ nome, area }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>{area}</p>
    </div>
  );
}
