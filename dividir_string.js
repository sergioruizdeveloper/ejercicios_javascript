let texto = "La niña paseaba a su perro. Vestía un traje azul y chupaba una paleta";

let caracteres = 15,
  pasos = Math.ceil( texto.length / caracteres );

for ( let i = 0; i < pasos; i++ ) {
  let desde = caracteres * i,
    hasta = caracteres * (i + 1);

  console.log( texto.substring( desde, hasta ) );
}