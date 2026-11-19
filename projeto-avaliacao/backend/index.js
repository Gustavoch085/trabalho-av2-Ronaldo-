import express from "express";
import cors from "cors";

const app = express();
const PORTA = 3001;

// pra conseguir ler o JSON que vem no body
app.use(express.json());
// libera o front (porta 3000) pra chamar a API
app.use(cors());

// "banco de dados" em memória, se reiniciar o servidor volta tudo pro começo
let alunos = [
  { id: 1, nome: "Ana", curso: "Sistemas de Informação" },
  { id: 2, nome: "Carlos", curso: "ADS" },
];

let cursos = [
  { id: 1, nome: "Sistemas de Informação", duracao: "4 anos" },
  { id: 2, nome: "ADS", duracao: "2,5 anos" },
];

let professores = [
  { id: 1, nome: "Marcos", area: "Desenvolvimento Web" },
  { id: 2, nome: "Juliana", area: "Banco de Dados" },
];

// gera o próximo id pegando o último da lista e somando 1
function proximoId(lista) {
  if (lista.length === 0) {
    return 1;
  }
  return lista[lista.length - 1].id + 1;
}

// ---------- ALUNOS ----------

// lista todos os alunos
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// busca um aluno pelo id
app.get("/alunos/:id", (req, res) => {
  // o id vem como texto na url, por isso o Number()
  const id = Number(req.params.id);
  const aluno = alunos.find((a) => a.id === id);

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }

  res.json(aluno);
});

// cadastra um aluno novo
app.post("/alunos", (req, res) => {
  const { nome, curso } = req.body;

  const novoAluno = {
    id: proximoId(alunos),
    nome: nome,
    curso: curso,
  };

  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// atualiza um aluno
app.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find((a) => a.id === id);

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }

  const { nome, curso } = req.body;

  // só troca o campo se ele veio no body
  if (nome) {
    aluno.nome = nome;
  }
  if (curso) {
    aluno.curso = curso;
  }

  res.json(aluno);
});

// remove um aluno
app.delete("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = alunos.findIndex((a) => a.id === id);

  // findIndex retorna -1 quando não acha
  if (indice === -1) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }

  // splice devolve um array com o que foi removido
  const removido = alunos.splice(indice, 1);
  res.json(removido[0]);
});

// ---------- CURSOS ----------

app.get("/cursos", (req, res) => {
  res.json(cursos);
});

app.get("/cursos/:id", (req, res) => {
  const id = Number(req.params.id);
  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return res.status(404).json({ mensagem: "Curso não encontrado" });
  }

  res.json(curso);
});

app.post("/cursos", (req, res) => {
  const { nome, duracao } = req.body;

  const novoCurso = {
    id: proximoId(cursos),
    nome: nome,
    duracao: duracao,
  };

  cursos.push(novoCurso);
  res.status(201).json(novoCurso);
});

// ---------- PROFESSORES ----------

app.get("/professores", (req, res) => {
  res.json(professores);
});

app.get("/professores/:id", (req, res) => {
  const id = Number(req.params.id);
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Professor não encontrado" });
  }

  res.json(professor);
});

app.post("/professores", (req, res) => {
  const { nome, area } = req.body;

  const novoProfessor = {
    id: proximoId(professores),
    nome: nome,
    area: area,
  };

  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

app.listen(PORTA, () => {
  console.log("Backend rodando em http://localhost:" + PORTA);
});
