"use client"; // precisa disso pra usar useState e useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import CursoCard from "../../components/CursoCard";

export default function CursosPage() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // busca os cursos no backend quando a página abre
  useEffect(() => {
    fetch("http://localhost:3001/cursos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCursos(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os cursos. O backend está rodando?");
        setCarregando(false);
      });
  }, []);

  return (
    <main>
      <h1>Cursos</h1>
      <p>
        <Link href="/">Voltar</Link>
      </p>

      {carregando && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      {cursos.map((curso) => (
        <CursoCard key={curso.id} nome={curso.nome} duracao={curso.duracao} />
      ))}
    </main>
  );
}
