
function sair(){
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  
  window.location.href="./login.html"
}

    if(localStorage.getItem("token")==null){
    alert("Voce precisa estar logado para acessar esta pagina.");
    window.location.href="./login.html";
  }
  
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let logado = document.querySelector("#logado");

logado.innerHTML=`Olá ${userLogado.nome}, você esta logado`