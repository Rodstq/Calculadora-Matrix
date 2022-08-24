function insert(num){
 
    let numero = document.getElementById('numeroResultadoUm').innerHTML;
    document.getElementById('numeroResultadoUm').innerHTML = numero + num;

 }

 function clean(){

    document.getElementById('numeroResultadoUm').innerHTML = '';

 }
 
 function eraser(){

    let numbers = document.getElementById('numeroResultadoUm').innerHTML;
    document.getElementById('numeroResultadoUm').innerHTML = numbers.substring(0, numbers.length-1);

 }
 
 function operations(){

    var result = document.getElementById('numeroResultadoUm').innerHTML;
    if (result){
      document.getElementById('numeroResultadoUm').innerHTML = eval(result);

    }

 }