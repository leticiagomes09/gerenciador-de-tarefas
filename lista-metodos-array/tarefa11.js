let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

// Filtrando tarefas que possuem mais de 15 caracteres
let tarefasFiltrada = tarefas.filter(tarefa => tarefa.length > 15);

console.log(`Lista de tarefas filtrada (mais de 15 caracteres): ${tarefasFiltrada}`);