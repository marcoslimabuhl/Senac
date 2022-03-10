var gasolina, etanol, consumo, resultado;

do{gasolina = parseFloat(prompt('Preço da Gasolina R$: '));
alert('');
etanol = parseFloat(prompt('Preço do Etanol R$ '));
consumo = parseFloat(etanol / gasolina).toFixed(2);
if(consumo > 0.70){
alert('Nesse caso, a melhor opção é a Gasolina');
}else if(consumo < 0.70){
alert('Nesse caso, a melhor opção é o Etanol');
}else{
(consumo = 0.70);
alert('');
alert('Escolha o combustível de sua preferência.');
}
alert('');
resultado = prompt("Calcule de novo digitando 's' para SIM e 'n' para NÃO");
}while (resultado == 's');
alert ('');
alert('Até mais');
