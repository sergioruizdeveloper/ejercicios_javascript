let numeros="0123456789";
let letras="abcdefghyjklmnñopqrstuvwxyz";
let letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

function tiene_numeros(texto){
   for(let i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(let i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tiene_minusculas(texto){
   for(let i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tiene_mayusculas(texto){
   for(let i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function seguridad_clave(clave){
   let seguridad = 0;

   if (clave.length!=0){
      if (tiene_numeros(clave) && tiene_letras(clave)){
         seguridad += 30;
      }
      if (tiene_minusculas(clave) && tiene_mayusculas(clave)){
         seguridad += 30;
      }
      if (clave.length >= 4 && clave.length <= 5){
         seguridad += 10;
      }else{
         if (clave.length >= 6 && clave.length <= 8){
            seguridad += 30;
         }else{
            if (clave.length > 8){
               seguridad += 40;
            }
         }
      }
   }
   return seguridad;          
}

function muestra_seguridad_clave(clave,formulario){
   let seguridad = seguridad_clave(clave);
   formulario.seguridad.value = seguridad + "%";
}