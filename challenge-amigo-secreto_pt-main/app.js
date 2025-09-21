const input = document.getElementById("amigo");
const listaEl = document.getElementById("listaAmigos");
const resultadoEl = document.getElementById("resultado");

let amigos = [];

// adicionar amigo
window.adicionarAmigo = function () {
  const nome = input.value.trim();
  if (!nome) {
    alert("Digite um nome antes de adicionar.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nome);

  const li = document.createElement("li");
  li.textContent = nome;
  listaEl.appendChild(li);

  input.value = "";
  input.focus();
};

// sortear apenas 1 amigo
window.sortearAmigo = function () {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  resultadoEl.innerHTML = `<li> O amigo secreto sorteado é: <strong>${sorteado}</strong>!</li>`;
};
