document.addEventListener( "click" ,showcolor );

document.getElementById("botao").addEventListener("click" , exibenome)

document.getElementById("btn-soma").addEventListener("click" , soma)

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
function soma()
{
    let numero1 = document.getElementById( "num1" ).value;
    let numero2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado1" ).innerText = parseFloat(numero1) + parseFloat(numero2);
}