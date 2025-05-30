let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do splice:");
console.table(tarefas);

// Removendo tarefas do índice 2 ao 4
let tarefasRemovidas = tarefas.splice(2, 2);

console.log("Depois do splice:");
console.table(tarefas);

console.log("Tarefas removidas:", tarefasRemovidas);