const alunos = [
  { nome: 'Alice', nota: 7 },
  { nome: 'Bob', nota: 5 },
  { nome: 'Charlie', nota: 8 },
  { nome: 'David', nota: 4 },
  { nome: 'Eva', nota: 6 },
];

function filtrarAlunosAprovados(arrAlunos) {
  return arrAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);