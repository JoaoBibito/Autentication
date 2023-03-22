let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");
let msgError=document.querySelector("#msgError");
let msgSuccess=document.querySelector("#msgSuccess");

let nome = document.querySelector("#nome");
let lblNome = document.querySelector("#lblNome");
let validNome=false;

let usuario = document.querySelector("#usuario");
let lblUsuario = document.querySelector("#lblUsuario");
let validUsuario=false;

let senha = document.querySelector("#senha");
let lblSenha = document.querySelector("#lblSenha");
let validSenha=false;

let confirmSenha = document.querySelector("#confirmSenha");
let lblConfirmSenha = document.querySelector("#lblConfirmSenha");
let validConfirmSenha=false;

nome.addEventListener("keyup",()=>{
  if(nome.value.length<=2){
    lblNome.setAttribute("style","color:red")
    lblNome.innerHTML="Nome *Insira no mínimo 3 caracteres"
    nome.setAttribute("style","border-color:red")
    validNome=false;
  }else{
    lblNome.setAttribute("style","color:green")
    lblNome.innerHTML="Nome"
    nome.setAttribute("style","border-color:green")
    validNome=true;
  }
})

usuario.addEventListener("keyup",()=>{
  if(usuario.value.length<=4){
    lblUsuario.setAttribute("style","color:red");
    lblUsuario.innerHTML="Usuario *Insira no mínimo 5 caracteres";
    usuario.setAttribute("style","border-color:red");
    validUsuario=false;
  }else{
    lblUsuario.setAttribute("style","color:green");
    lblUsuario.innerHTML="Usuario";
    usuario.setAttribute("style","border-color:green");
    validUsuario=true;
  }
})

senha.addEventListener("keyup",()=>{
  if(senha.value.length<=5){
    lblSenha.setAttribute("style","color:red");
    lblSenha.innerHTML="Senha *Insira no mínimo 6 caracteres";
    senha.setAttribute("style","border-color:red");
    validSenha=false;
  }else{
    lblSenha.setAttribute("style","color:green");
    lblSenha.innerHTML="Senha";
    senha.setAttribute("style","border-color:green");
    validSenha=true;
  }
})

confirmSenha.addEventListener("keyup",()=>{
  if(confirmSenha.value!=senha.value){
    lblConfirmSenha.setAttribute("style","color:red");
    lblConfirmSenha.innerHTML="Confirma senha *As senhas não conferem";
    confirmSenha.setAttribute("style","border-color:red");
    validConfirmSenha=false;
  }else{
    lblConfirmSenha.setAttribute("style","color:green");
    lblConfirmSenha.innerHTML="Confirm senha";
    confirmSenha.setAttribute("style","border-color:green");
    validConfirmSenha=true;
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listUser=JSON.parse(localStorage.getItem('listUser')||'[]')
    listUser.push(
      {
        nomeCad:nome.value,
        usuarioCad:usuario.value,
        senhaCad:senha.value
      }
    )
    localStorage.setItem('listUser',JSON.stringify(listUser))
    msgError.setAttribute("style","Display:none");
    msgError.innerHTML=""

    msgSuccess.setAttribute("style","display:block")
    msgSuccess.innerHTML="<strong>Cadastrando usuario...</strong>"
      setTimeout(()=>{
    window.location.href="./login.html";
      },2000)
  }else{
    msgSuccess.setAttribute("style","display:none")
    msgSuccess.innerHTML=""

    msgError.setAttribute("style","Display:block");
    msgError.innerHTML="<strong>Preencha todos os campos corretamente.</sgtrong>"
  }
}

btn.addEventListener("click", ()=>{
  let inputSenha=document.querySelector("#senha")
  if(inputSenha.getAttribute("type")=="password"){
    inputSenha.setAttribute("type","text")
  }
  else{
    inputSenha.setAttribute("type","password")
  }
})

btnConfirm.addEventListener("click", ()=>{
  let inputSenha=document.querySelector("#confirmSenha")
  if(inputSenha.getAttribute("type")=="password"){
    inputSenha.setAttribute("type","text")
  }
  else{
    inputSenha.setAttribute("type","password")
  }
})

