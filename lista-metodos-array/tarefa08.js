let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.log("Antes do splice:");
console.table(tarefas);

// Removendo tarefa do ímdice 3 e substituindo por uma nova 

let tarefasRemovidas = tarefas.splice(3, 1);

console.log("Depois do splice:");
tarefas.splice(3,0, "Assistir tik tok");
console.table(tarefas);

console.log("Tarefas removidas:", tarefasRemovidas);


