"use client"; // precisa disso pra usar useState e useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import ProfessorCard from "../../components/ProfessorCard";

export default function ProfessoresPage() {
  const [professores, setProfessores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // busca os professores no backend quando a página abre
  useEffect(() => {
    fetch("http://localhost:3001/professores")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProfessores(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os professores. O backend está rodando?");
        setCarregando(false);
      });
  }, []);

  return (
    <main>
      <h1>Professores</h1>
      <p>
        <Link href="/">Voltar</Link>
      </p>

      {carregando && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      {professores.map((professor) => (
        <ProfessorCard
          key={professor.id}
          nome={professor.nome}
          area={professor.area}
        />
      ))}
    </main>
  );
}
