let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', `Ir à academia`, 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

// Verifica se possui a tarefa, se não tiver adiciona
if (tarefas.includes("Ir à academia")) {
    console.log("Na lista ja possui essa tarefa");
    
} else {
  tarefas.push (`Ir à academia`);
  console.log("lista com a tarefa incluida:");
  console.table(tarefas);
}