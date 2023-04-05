document.addEventListener( "click" ,showcolor );

document.getElementById("botao").addEventListener("click" , exibenome)

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerText = "Meu nome e: " + usuario;
    document.getElementById( "nome" ).value = "";
}
function number()
{
    let numero = document.getElementById( "num1" ).value;
    document.getElementById( "resultado1" ).innerText = "=" + numero;
    document.getElementById( "num2" ).value = "";
}