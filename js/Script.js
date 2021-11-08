"use strict";
forma = document.getElementById("forma"),
    Numero = document.getElementById("Numero");
forma.addEventListener("submit", procesa, false);
function procesa() {
     var valor = forma["nume"].valueAsNumber;
   var resul = Math.sqrt(valor);

   if (valor >= 0){
 Numero.textContent="La raíz cuadrada del numero "+valor+" es " + resul;
}else{
  Numero.textContent="El numero que se ha ingresado es negativo, recuerda poner un numero positivo"

   }
}
