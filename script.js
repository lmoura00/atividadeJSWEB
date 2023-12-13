//LUCAS DE MOURA GALVÃO
//1 QUESTÃO
var btn1q = document.getElementById("btn1q")
function primQuestao(){
    var texto1q = document.getElementById("texto1q")
    var texto = texto1q.value
    alert(texto)
}
btn1q.addEventListener('click', primQuestao)


//2 QUESTÃO
var btn2q = document.getElementById("btn2q")
function segQuestao(){
    var texto2q = document.getElementById("texto2q")
    texto2q.textContent=""
    var texto = texto2q.value
    var result = document.getElementById("textoResult")
    result.textContent = texto
}
btn2q.addEventListener('click', segQuestao)

//3 QUESTÃO
var btnPlus = document.getElementById("plus")
var btnMinus = document.getElementById("minus")
var btnDivide = document.getElementById("divide")
var btnMultiply = document.getElementById("multiply")
function soma(){
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    var resultado = document.getElementById("resultado")
    var v1 = parseFloat(valor1.value)
    var v2 = parseFloat(valor2.value)
    var resultFinal = v1+v2
    resultado.setAttribute("placeholder", resultFinal)
    
}
function sub(){
    
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    var resultado = document.getElementById("resultado")
    var v1 = parseFloat(valor1.value)
    var v2 = parseFloat(valor2.value)
    var resultFinal = v2-v1
    resultado.setAttribute("placeholder", resultFinal)
    
}
function mult(){
    
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    var resultado = document.getElementById("resultado")
    var v1 = parseFloat(valor1.value)
    var v2 = parseFloat(valor2.value)
    var resultFinal = v1*v2
    resultado.setAttribute("placeholder", resultFinal)
    
}
function div(){
    
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    var resultado = document.getElementById("resultado")
    var v1 = parseFloat(valor1.value)
    var v2 = parseFloat(valor2.value)
    var resultFinal = v2/v1
    resultado.setAttribute("placeholder", resultFinal)
    
}

btnPlus.addEventListener('click', soma)
btnMinus.addEventListener("click", sub)
btnMultiply.addEventListener('click', mult)
btnDivide.addEventListener('click', div)

//4 QUESTÃO
var somaCheck = document.getElementById("soma")
var subCheck = document.getElementById("sub")
var multCheck = document.getElementById("mult")
var divCheck = document.getElementById("div")
function teste(){
    alert(somaCheck.value)
}
