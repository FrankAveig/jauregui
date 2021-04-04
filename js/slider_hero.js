  const imagenes = ['../imagenes/hero.png','../imagenes/servicio1.jpg','../imagenes/servicio2.png'];

  let i=1;
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const progressBar = document.querySelector('#progress_bar');
  const divIndicadores = document.querySelector('#indicadores');
  let porcentaje_base = 100/ imagenes.length;
  let porcentaje_actual = porcentaje_base;

  for (let index = 0; index < imagenes.length; index++) {
    const div = document.createElement('button')
    div.classList.add('circles')
    div.id = index
    divIndicadores.appendChild(div)
    
  }
  document.getElementById("0").onclick = function(){
    i=0;
    img2.src=imagenes[0]
    img1.src=imagenes[0]
    const circulo_actual = Array.from(circulos).find(el => el.id == i)
    Array.from(circulos).forEach(cir=>cir.classList.remove('resaltado'))
    circulo_actual.classList.add('resaltado')
  }
  document.getElementById("1").onclick = function(){
    i=1;
    img2.src=imagenes[1]
    img1.src=imagenes[1]
    const circulo_actual = Array.from(circulos).find(el => el.id == i)
    Array.from(circulos).forEach(cir=>cir.classList.remove('resaltado'))
    circulo_actual.classList.add('resaltado')
  }
  document.getElementById("2").onclick = function(){
    i=2;
    img2.src=imagenes[2]
    img1.src=imagenes[2]
    const circulo_actual = Array.from(circulos).find(el => el.id == i)
    Array.from(circulos).forEach(cir=>cir.classList.remove('resaltado'))
    circulo_actual.classList.add('resaltado')
  }

  progressBar.style.width = `${porcentaje_base}%`
  img1.src =imagenes[0]
  const circulos = document.querySelectorAll('.circles')
  circulos[0].classList.add('resaltado')

  const slideshow= () =>{
    img2.src = imagenes[i]
    const circulo_actual = Array.from(circulos).find(el => el.id == i)
    Array.from(circulos).forEach(cir=>cir.classList.remove('resaltado'))
    circulo_actual.classList.add('resaltado')

    img2.classList.add('active')
    i++
    porcentaje_actual+=porcentaje_base
    progressBar.style.width = `${porcentaje_actual}%`
    if(i == imagenes.length){
      i= 0
      porcentaje_actual = porcentaje_base - porcentaje_base

    }
    
    setTimeout(() =>{
        img1.src= img2.src
        img2.classList.remove('active')
    },1000)
  }
  setInterval(slideshow,4000)
 
 
