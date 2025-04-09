document.getElementById("inscricao-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const telefone = document.getElementById("telefone").value.trim();
  const trilha = document.getElementById("trilha").value;
  const idUsuario = document.getElementById("idUsuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (!nome || !email || !idade || !telefone || !trilha || !idUsuario || !senha) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("E-mail inválido!");
    return;
  }

  if (isNaN(idade) || idade <= 0) {
    alert("Idade inválida!");
    return;
  }

  const dados = {
    nome,
    email,
    idade,
    telefone,
    trilha,
    idUsuario,
    senha,
  };

  localStorage.setItem("usuario_" + idUsuario, JSON.stringify(dados));

  document.getElementById("mensagem-sucesso").style.display = "block";
  this.reset();
});
