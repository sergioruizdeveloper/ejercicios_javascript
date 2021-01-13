let texto = "La niña paseaba a su perro. Vestía un traje azul y chupaba una paleta";

let array = [],
  caracteres = 15,
  pasos = Math.ceil( texto.length / caracteres );

for ( let i = 0; i < pasos; i++ ) {
  let desde = caracteres * i,
    hasta = caracteres * (i + 1);

  array.push( texto.substring( desde, hasta ) );
}

console.log( array );