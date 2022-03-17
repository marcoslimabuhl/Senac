var numero = parseInt(prompt('Digite o ano para verificar '));


if (numero % 400 == 0){
  alert('O ano é bissexto!')
}
else if(numero % 4 == 0 && numero % 100 != 0) {
  alert('O ano é bissexto!')
}
else{
  alert('O ano não é bissexto!')
}
