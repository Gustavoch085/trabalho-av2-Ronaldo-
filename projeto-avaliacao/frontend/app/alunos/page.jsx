"use client"; // precisa disso pra usar useState e useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import AlunoCard from "../../components/AlunoCard";

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // roda uma vez quando a página abre e busca os alunos no backend
  useEffect(() => {
    fetch("http://localhost:3001/alunos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setAlunos(dados);
        setCarregando(false);
      })
      .catch(() => {
        // cai aqui se o backend estiver desligado
        setErro("Não foi possível carregar os alunos. O backend está rodando?");
        setCarregando(false);
      });
  }, []);

  return (
    <main>
      <h1>Alunos</h1>
      <p>
        <Link href="/">Voltar</Link>
      </p>

      {carregando && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      {alunos.map((aluno) => (
        <AlunoCard key={aluno.id} nome={aluno.nome} curso={aluno.curso} />
      ))}
    </main>
  );
}
