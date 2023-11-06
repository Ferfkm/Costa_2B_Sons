function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < 9 ){
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
    console.log(contador);
}
