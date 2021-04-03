
const figure1 = document.querySelector('.img');


function ocultar_nombre(){
  document.getElementById("dale_click").innerHTML="";
}
function cambiar_nombre1 (){
  document.getElementById("nombre1").innerHTML="Dr.Daniel Jáuregui"
  document.getElementById("texto1").innerHTML="El Director Médico de nuestra clínica, el Dr.Daniel Jáuregui,ha estado trabajando en este campo de especialización médica desde 2002. Después de fundar su propia clínica en 2010, trajo aquí toda su experiencia.  Sobre todo, le encanta verte salir con una amplia sonrisa brillante"
}
document.getElementById("boton1").onclick = function(){
cambiar_nombre1()
ocultar_nombre()

/*   if (figure1.classList.contains('is-active')){
    figure1.classList.remove('is-active');
    ocultar_nombre()
  }else{
  figure1.classList.add('is-active');
  cambiar_nombre1();
  } */
 
}

function cambiar_nombre2 (){
  document.getElementById("nombre1").innerHTML="Dra.Leslie Gross"
  document.getElementById("texto1").innerHTML="Leslie es una de las higienistas dentales más experimentadas del condado. Trabaja en nuestra clínica dental desde el primer día. Nadie contribuyó más a la satisfacción y resolución de inquietudes de nuestros clientes que ella."
}
document.getElementById("boton2").onclick = function(){
   cambiar_nombre2();
   ocultar_nombre();
}

function cambiar_nombre3 (){
  document.getElementById("nombre1").innerHTML="Dra.Dana Sims"
  document.getElementById("texto1").innerHTML="Dana se desempeñó anteriormente como enfermera práctica senior en la clínica Mayo. Obtuvo su licencia trabajando duro después de graduarse de una facultad de medicina con honores cum laude. Ella realmente representa todo el cuidado del que está rodeado nuestro consultorio dental y nuestros pacientes lo sienten todo el tiempo."

}
document.getElementById("boton3").onclick = function(){
  cambiar_nombre3();
  ocultar_nombre();
}

function cambiar_nombre4 (){
  document.getElementById("nombre1").innerHTML="Kimberly Barker"
  document.getElementById("texto1").innerHTML="Kimberly worked for numerous dental offices in the US and Canada during her 20 years long career. And while she will not drill your teeth personally, she will make sure that everything is running smoothly before, during and after your appointment!"
}

document.getElementById("boton4").onclick = function(){
  cambiar_nombre4();
  ocultar_nombre();
}
