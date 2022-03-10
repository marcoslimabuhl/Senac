var naval = [[],[],[],[],[],[],[],[],[],[]]
var linha,coluna

for(var i=0;i<10;i++){
  for(var j=0;j<10;j++){
    naval[i][j]='ÁGUA'
  }
  
}

for(var pos=1;pos<11;pos++){
  linha=Math.floor(Math.random()*10)
  coluna=Math.floor(Math.random()*10)
  naval[linha][coluna]='NAVIO'
}

do {
linha = prompt('Insira a linha')
coluna = prompt('Insira a coluna')

if(naval[linha][coluna]=='NAVIO'){
  alert('Parabéns. Você ACERTOU!')
}else{
  alert('ERRRRRROOOOOOO')
}

var resp = prompt('Deseja continuar? s/n')

console.clear()

}while(resp=='s')

alert('Já vai já?')
