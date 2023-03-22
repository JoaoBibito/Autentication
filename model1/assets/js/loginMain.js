let btn = document.querySelector(".fa-eye")
btn.addEventListener("click", ()=>{
  let inputSenha=document.querySelector("#senha")
  if(inputSenha.getAttribute("type")=="password"){
    inputSenha.setAttribute("type","text")
  }
  else{
    inputSenha.setAttribute("type","password")
  }
})

function entrar(){
  let usuario=document.querySelector("#usuario");
  let lblUser=document.querySelector("#lblIdUser");

  let senha= document.querySelector("#senha");
  let lblSenha=document.querySelector("lblSenha");
  let msgError= document.querySelector("msgError")
  let listUser=[];
  let userValid={
    nome:'',
    user:'',
    senha:''
  }

  listUser=JSON.parse(localStorage.getItem('listUser'));

  listUser.forEach((item)=>{
    if(usuario.value==item.usuarioCad && senha.value==item.senhaCad){
      userValid={
        nome:item.nomeCad,
        usuario:item.usuarioCad,
        senha:item.senhaCad
      }
    }
  })

  if(usuario.value==userValid.usuario && senha.value==userValid.senha){
    window.location.href="./inicio.html";
    let token=Math.random().toString(16).substr(2)+Math.random().toString(16).substr(2)
    localStorage.setItem("token",token)

    localStorage.setItem("userLogado",JSON.stringify(userValid))
  }else{
    lblUser.setAttribute("style","color:red");
    usuario.setAttribute("style","border-color:red");
    senha.setAttribute("style","border-color:red");
    lblSenha.setAttribute("style","color:red");
    msgError.setAttribute("style","display:block");
    msgError.innerHTML="Usuario ou senha incorretos.";
    usuario.focus();
  }
}