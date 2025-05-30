let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

// Adiciona "Fazer:" na frente de cada elemento do array
let tarefasFazer = tarefas.map(tarefa => "Fazer: " + tarefa);
console.log(tarefasFazer );