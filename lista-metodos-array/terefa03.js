let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.log("Antes do unshift");
console.table(tarefas)

// Adicionando uma tarefa no Array 
tarefas.unshift("dançar");

console.log("Depois do unshift");
console.table(tarefas);