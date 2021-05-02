
const figure1 = document.querySelector('.img');


function ocultar_nombre(){
  document.getElementById("dale_click").innerHTML="";
}

function ocultar_nombre1(){
  document.getElementById("nombre1").innerHTML="";
  document.getElementById("texto1").innerHTML="";
}

function ocultar_nombre2(){
  document.getElementById("nombre2").innerHTML="";
  document.getElementById("texto2").innerHTML="";
}

function ocultar_nombre3(){
  document.getElementById("nombre3").innerHTML="";
  document.getElementById("texto3").innerHTML="";
}


function cambiar_nombre1 (){
  document.getElementById("nombre1").innerHTML="Dr.Daniel Jáuregui"
  document.getElementById("texto1").innerHTML="Odontólogo"
}
document.getElementById("boton1").onclick = function(){
cambiar_nombre1();
ocultar_nombre();


/*   if (figure1.classList.contains('is-active')){
    figure1.classList.remove('is-active');
    ocultar_nombre()
  }else{
  figure1.classList.add('is-active');
  cambiar_nombre1();
  } */
 
}

function cambiar_nombre2 (){
  document.getElementById("nombre2").innerHTML="Beatriz Risco"
  document.getElementById("texto2").innerHTML="Administradora"
}
document.getElementById("boton2").onclick = function(){
   cambiar_nombre2();
   ocultar_nombre();

}

function cambiar_nombre3 (){
  document.getElementById("nombre3").innerHTML="Cindy Triviño"
  document.getElementById("texto3").innerHTML="Asistente"

}
document.getElementById("boton3").onclick = function(){
  cambiar_nombre3();
  ocultar_nombre();
  
}


function cambiar_nombre4 (){
  document.getElementById("nombre4").innerHTML="Dr.Daniel Jáuregui"
  document.getElementById("texto4").innerHTML="Odontologo"
}
document.getElementById("boton4").onclick = function(){
cambiar_nombre4()
ocultar_nombre()
}

function cambiar_nombre5 (){
  document.getElementById("nombre5").innerHTML="Beatriz Risco"
  document.getElementById("texto5").innerHTML="Administradora"
}
document.getElementById("boton5").onclick = function(){
   cambiar_nombre5();
   ocultar_nombre();
}


function cambiar_nombre6 (){
  document.getElementById("nombre6").innerHTML="Cindy Triviño"
  document.getElementById("texto6").innerHTML="Asistente"

}
document.getElementById("boton6").onclick = function(){
  cambiar_nombre6();
  ocultar_nombre();
}