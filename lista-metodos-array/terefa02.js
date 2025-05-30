let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do pop");
console.table(tarefas);

// Removendo a ultima tarefa 
let tarefaRemovida = tarefas.pop();

console.log("Depois do pop");
console.table(tarefas);

console.log("Tarefa Removida: ", tarefaRemovida);