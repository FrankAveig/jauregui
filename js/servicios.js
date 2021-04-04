const titulo = document.getElementById("titulo_modal");
const parrafo = document.getElementById("parrafo_modal");
const close = document.getElementById('close')
const tblanquemiento = "Blanqueamiento";
const pblanquemiento = `El blanqueamiento dental es un tratamiento de odontología estética que tiene por objetivo eliminar las manchas dentales y hacer que la dentición adquiera una tonalidad más blanca y brillante. La actual popularidad de la estética ha convertido a este procedimiento odontológico en uno de los más solicitados de los últimos años.<br><br> de especial importancia que los dentistas estén capacitados para el manejo de lagentes blanqueadores, siguiendo un protocolo adecuado de diagnóstico, planificación del procedimiento y mantenimiento de los resultados. Por ello, es vital que el profesional conozca a fondo tanto las indicaciones como las contraindicaciones de las técnicas de blanqueamiento dental para poder transmitírselas a los pacientes.<br><br>Por otro lado, la población debe concebir este tratamiento como un proceso médico que ha de ser realizado bajo la supervisión de un dentista, y únicamente realizado en la clínica dental</br>`;
const tendodoncia = "Endodoncia";
const pendodoncia = `La endodoncia es, como hemos dicho, la extirpación total de la pulpa o nervio del diente. Se trata de un procedimiento de limpieza del sistema de conductos radiculares en el que se eliminan  bacterias y tejido necrótico para dejar el conducto lo más aséptico posible.<br><br> Las endodoncias se realizan en piezas dentales con caries profundas, que propician la inflamación o lanecrosis (muerte) de la pulpa dental. `;
const tcarillas = 'Carillas';
const pcarillas = `Las carillas dentales son piezas delgadas de porcelana del color del diente que se  cementan a las superficies delanteras de los dientes naturales, y son una manera de abordar una variedadde problemas físicos y estéticos.`;
const tprotesis= 'Protesis Removibles';
const pprotesis= `Una prótesis dental es un elemento artificial que sirve para restaurar la anatomía de uno o varios dientes, consiguiendo que el paciente recupere la funcionalidad y estética de su dentición.`;
const tcoronas= 'Coronas de porcelana';
const pcoronas= `se utilizan para reemplazar la corona natural del diente. Destacan frente a los otros tipos de coronas por su naturalidad y por el buen resultado estético que dan a la boca.<br><br> La porcelana es un material que aporta una estética muy parecida a la de un diente natural.<br><br> Los implantes dentales sirven para sustituir la raíz y las coronas dentales de porcelana la parte visible de la pieza dental o corona.<br><br> Se recomienda su utilización ante el deterioro del diente por caries o fracturas. También cuando se ha sufrido la pérdida total del diente.`;
const tsellantes='Sellantes';
const psellantes=`Los selladores dentales son un recubrimiento delgado de resina que los dentistas aplican a los surcos de las superficies de las piezas dentales traseras, los molares y premolares. Los selladores se aplican para ayudar a evitar la caries.`
const tprofilaxis= `Profilaxis`;
const pprofilaxis= `En ododontología, profilaxis son aquellas acciones destinadas a prevenir ciertas afecciones dentobucales. Entre dichas afecciones, las más frecuentes son las caries, que afectan a los dientes, y la gingivitis y periodontitis, que afectan a las encías. <br><br>Aunque nos encontremos bien y pensemos que no tenemos signos ni síntomas de estas afecciones, es perfectamente posible que SÍ tengamos alguno de estos problemas`;
const tdestartraje= `Destartraje`
const pdestartraje= `Se conoce por este nombre a una técnica que se emplea para la prevención de posibles problemas dentales.<br><br> Consiste en eliminar la placa dental y el sarro que puede acumularse en la superficie del diente. Su actuación se centra en la zona gingival o, lo que es lo mismo, bajo la línea de las encías.<br><br> Es un espacio al que es casi imposible acceder si no es empleando la tecnología profesional adecuada.`;


close.addEventListener('click' , ()=> {
  modal_container.classList.remove('show');
});

function cambiar_modal(t, p){
  this.t = titulo.innerHTML=t;
  this.p = parrafo.innerHTML=p;
  modal_container.classList.add("show")
}



document.getElementById("open_blanqueamiento").onclick=function(){
  cambiar_modal(tblanquemiento,pblanquemiento);
}

document.getElementById("open_endodoncia").onclick=function(){
  cambiar_modal(tendodoncia,pendodoncia);
}

document.getElementById('open_carillas').onclick=function(){
  cambiar_modal(tcarillas,pcarillas);
}
document.getElementById('open_protesis').onclick=function(){
  cambiar_modal(tprotesis,pprotesis);
}

document.getElementById('open_coronas').onclick=function(){
  cambiar_modal(tcoronas,pcoronas);
}

document.getElementById('open_sellantes').onclick=function(){
  cambiar_modal(tsellantes,psellantes);
}

document.getElementById('open_profilaxis').onclick=function(){
  cambiar_modal(tprofilaxis,pprofilaxis);
}

document.getElementById('open_destartraje').onclick=function(){
  cambiar_modal(tdestartraje,pdestartraje);
}

