let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.log("Antes do unshift");
console.table(tarefas)

// Adicionando duas novas tarefas no Array 
tarefas.unshift("cozinhar", "Limpar a casa");

console.log("Depois do unshift");
console.table(tarefas);