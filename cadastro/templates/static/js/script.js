document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in");
});

// Animação de saída ao clicar em links
const links = document.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");

    setTimeout(function () {
      window.location.href = link.href;
    }, 500); // Tempo correspondente à transição CSS
  });
});

function mascaraCPF(input) {
  var valor = input.value;

  // Remove todos os caracteres que não são números
  valor = valor.replace(/\D/g, "");

  // Adiciona pontos e traço na posição correta
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  input.value = valor;
}

function mascaraDataNasc(input) {
    var valor = input.value;

    valor = valor.replace(/\D/g, "");

    if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    }
    if (valor.length > 5) {
        valor = valor.replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    }
  
    input.value = valor;
  }

function mascaraTelefone(input){
  var telefone = input.value;

  telefone = telefone.replace(/\D/g, "");

  telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
  telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); 

  input.value = telefone;

}
