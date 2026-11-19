# Projeto Avaliação (AV2) - Sistema Acadêmico

Trabalho da AV2. É um sistema acadêmico bem simples com um backend em Node.js + Express e um frontend em React + Next.js (App Router).

O backend guarda alunos, cursos e professores em arrays na memória (não tem banco de dados) e o frontend busca esses dados com `fetch()` e mostra em cards.

## Estrutura das pastas

```
projeto-avaliacao/
├── backend/
│   ├── index.js          -> servidor Express com todas as rotas
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── globals.css
│   │   ├── page.jsx              -> tela inicial
│   │   ├── alunos/page.jsx
│   │   ├── cursos/page.jsx
│   │   └── professores/page.jsx
│   ├── components/
│   │   ├── AlunoCard.jsx
│   │   ├── CursoCard.jsx
│   │   └── ProfessorCard.jsx
│   └── package.json
└── README.md
```

## Como rodar

Precisa ter o Node.js instalado (usei a versão 22).

Tem que rodar os dois projetos ao mesmo tempo, cada um em um terminal.

### Backend (porta 3001)

```bash
cd backend
npm install
npm run dev
```

Vai ficar em http://localhost:3001

### Frontend (porta 3000)

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Depois é só abrir http://localhost:3000 no navegador.

Obs: o backend tem que estar rodando, senão as páginas não conseguem carregar os dados.

## Rotas do backend

Alunos:

| Método | Rota        | O que faz              |
| ------ | ----------- | ---------------------- |
| GET    | /alunos     | lista todos os alunos  |
| GET    | /alunos/:id | busca um aluno pelo id |
| POST   | /alunos     | cadastra um aluno      |
| PUT    | /alunos/:id | atualiza um aluno      |
| DELETE | /alunos/:id | remove um aluno        |

Cursos:

| Método | Rota        | O que faz              |
| ------ | ----------- | ---------------------- |
| GET    | /cursos     | lista todos os cursos  |
| GET    | /cursos/:id | busca um curso pelo id |
| POST   | /cursos     | cadastra um curso      |

Professores:

| Método | Rota             | O que faz                  |
| ------ | ---------------- | -------------------------- |
| GET    | /professores     | lista todos os professores |
| GET    | /professores/:id | busca um professor pelo id |
| POST   | /professores     | cadastra um professor      |

Exemplo de body para o POST /alunos:

```json
{
  "nome": "Maria",
  "curso": "ADS"
}
```

As rotas de POST, PUT e DELETE dá pra testar pelo Postman, Insomnia ou Thunder Client.

## Páginas do frontend

- `/` - tela inicial com os links
- `/alunos` - lista de alunos
- `/cursos` - lista de cursos
- `/professores` - lista de professores

## Observações

- Os dados ficam só na memória, então quando reinicia o backend volta tudo pro estado inicial.
- O frontend não tem nenhum dado fixo, vem tudo da API.
