const quadrado= document.querySelector('.quadrado');
const imgMemes= document.querySelector('img');

const mostrarQuadrado= function(){
    quadrado.classList.toggle('visivel');
}
const destaqueImagem=function() {
    imgMemes.classList.toggle('destaque');
}

quadrado.onmouseover= mostrarQuadrado;
quadrado.onmouseout= mostrarQuadrado;

imgMemes.onmouseenter=destaqueImagem;
imgMemes.onmouseout=destaqueImagem;
