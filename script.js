function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// CALCULADORA 1 - NUMERICA

function calcular() {
  let text1 = document.getElementById("texto1");
  let text2 = document.getElementById("texto2");
  let n1 = Number(text1.value);
  let n2 = Number(text2.value);

  let calculo = 0;
  let operacao = document.getElementById("sinal");
  if (sinal.innerHTML== "+") {
    calculo = n1 + n2;
  } else if (operacao.innerHTML == "-") {
    calculo = n1 - n2;
  } else if (operacao.innerHTML == "x") {
    calculo = n1 * n2;
  } else if (operacao.innerHTML == "/") {
    calculo = n1 / n2;
  }

  let resultadoHtml = document.getElementById("res");
  resultadoHtml.innerHTML = ` o resultado do calculo é ${calculo} `;
}

function subtrair() {
  let subtrair = document.getElementById("sinal");
  subtrair.innerHTML = "-";
}

function somar() {
  let soma = document.getElementById("sinal");
  soma.innerHTML = "+";
}
function multiplicar() {
  let multiplicar = document.getElementById("sinal");
  multiplicar.innerHTML = "x";
}
function dividir() {
  let dividir = document.getElementById("sinal");
  dividir.innerHTML = "/";
}


// CALCULADORA 2 - BOTÕES

let n1 = '';
let n2 = '' ;
let operacao = '';
let resultado = 0;
let resultadoexibicao = '';
let n1JaEscolhido = false;
let n2JaEscolhido = false;
let operacaoJaEscolhida = false;


function um(){

  if(operacaoJaEscolhida == false){
    n1 = n1.concat('1')
  }
  else{
    n2 = n2.concat('1')
  }

    resultadoexibicao = resultadoexibicao.concat('1')
    let h2Resultado = document.getElementById('resultado'); 
    h2Resultado.innerHTML = resultadoexibicao
}

function dois(){
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('2')
  }
  else{
    n2 = n2.concat('2')
  }
    

    resultadoexibicao = resultadoexibicao.concat('2')
    let h2Resultado = document.getElementById('resultado');
    h2Resultado.innerHTML = resultadoexibicao

}

function tres(){
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('3')
  }
  else{
    n2 = n2.concat('3')
  }
    resultadoexibicao = resultadoexibicao.concat('3')
    let h2Resultado = document.getElementById('resultado');
    h2Resultado.innerHTML = resultadoexibicao
}

function quatro() {
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('4')
  }
  else{
    n2 = n2.concat('4')
  }
    
  resultadoexibicao = resultadoexibicao.concat('4')
  let h2Resultado = document.getElementById('resultado');
  h2Resultado.innerHTML = resultadoexibicao

}

function cinco() {
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('5')
  }
  else{
    n2 = n2.concat('5')
  }
  resultadoexibicao = resultadoexibicao.concat('5')
  let h2Resultado = document.getElementById('resultado');
  h2Resultado.innerHTML = resultadoexibicao
}



function seis() {
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('6')
  }
  else{
    n2 = n2.concat('6')
  }
    resultadoexibicao = resultadoexibicao.concat('6');
    let h2Resultado = document.getElementById('resultado');
    h2Resultado.innerHTML = resultadoexibicao;
}

function sete(){   
    
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('7')
  }
  else{
    n2 = n2.concat('7')
  }    resultadoexibicao = resultadoexibicao.concat('7');
    let h2Resultado = document.getElementById('resultado');
    h2Resultado.innerHTML = resultadoexibicao;
}



function oito() {
  if(operacaoJaEscolhida == false){
  n1 = n1.concat('8')
}
else{
  n2 = n2.concat('8')
}

  resultadoexibicao = resultadoexibicao.concat("8");
  document.getElementById("resultado").innerHTML = resultadoexibicao;
}


function nove() {
if(operacaoJaEscolhida == false){
    n1 = n1.concat('9')
  }
  else{
    n2 = n2.concat('9')
  }
  resultadoexibicao = resultadoexibicao.concat("9");
  document.getElementById("resultado").innerHTML = resultadoexibicao;
}


function zero(){
   
  if(operacaoJaEscolhida == false){
    n1 = n1.concat('0')
  }
  else{
    n2 = n2.concat('0')
  }
    resultadoexibicao = resultadoexibicao.concat('0')
    document.getElementById('resultado').innerHTML = resultadoexibicao

}

function adicao(){
  if(operacaoJaEscolhida == false){
    operacao = '+'
    operacaoJaEscolhida = true; 
    resultadoexibicao = resultadoexibicao.concat(operacao)
    document.getElementById('resultado').innerHTML = resultadoexibicao
  }    
}

function subtracao(){
  if(operacaoJaEscolhida == false){
    operacao = '-'
    operacaoJaEscolhida = true 
    resultadoexibicao = resultadoexibicao.concat(operacao)
    document.getElementById('resultado').innerHTML = resultadoexibicao
  }
}


function multiplicacao(){
  if(operacaoJaEscolhida == false){
    operacao = '*' 
    operacaoJaEscolhida = true 
    resultadoexibicao = resultadoexibicao.concat(operacao)
    document.getElementById('resultado').innerHTML = resultadoexibicao
  }
}
   


function divisao(){
  if(operacaoJaEscolhida == false){
    operacao = '/' 
    operacaoJaEscolhida = true 
    resultadoexibicao = resultadoexibicao.concat(operacao)
    document.getElementById('resultado').innerHTML = resultadoexibicao
  }
}

function igual() {
  let n1Number = Number(n1)
  let n2Number = Number(n2)

  if (n1Number > 0 && n2Number > 0 && operacao != '') {
    if (operacao == '+') {
      resultado = n1Number + n2Number 
      document.getElementById('resultado').innerHTML = resultado
    }
    else if (operacao == '-'){
        resultado = n1Number - n2Number 
        document.getElementById('resultado').innerHTML = resultado
        
    }
    else if (operacao == '*'){
        resultado = n1Number * n2Number 
        document.getElementById('resultado').innerHTML = resultado

    }
    else if (operacao == '/'){
        resultado = n1Number / n2Number 
        document.getElementById('resultado').innerHTML = resultado
    }

    
  } else {
    alert("é necessario todos os valores e operação para realizar o calculo ");
  }
}
function deletar(){
    n1 = ''
    n2 = ''
    resultado = 0
    operacao = ''
    operacaoJaEscolhida = false 
    resultadoexibicao = ''
    let h2Resultado =  document.getElementById('resultado');
    h2Resultado.innerHTML= resultadoexibicao
   

}



  