// textArea
var caixa_sugestoes = document.querySelectorAll('[data-contador-fonte]');
// span
var maximo_caixa_sugestoes = document.querySelectorAll('[data-contador-destino]');

function verifica_numero_de_caracteres() {
  var contadorFonte = caixa_sugestoes[0].value.length;
  var contadorDestino = 150 - contadorFonte;
  maximo_caixa_sugestoes[0].textContent = contadorDestino;
  
  if (contadorDestino<=0){
  caixa_sugestoes[0].style.background = "red";
}else{
  caixa_sugestoes[0].style.background  = "white";
}
}

caixa_sugestoes[0].addEventListener("keyup", verifica_numero_de_caracteres);
