

/**
 * Função nominal
 */
function media(notaMedia) {
return notaMedia>6? true:false

}

/* Função do tipo Arrow*/
condicaoTrabalho = (notaTrabalho) => {
    return notaTrabalho > 0 ? true : false
}


/** Função anonima, onde condicaoAluno que aponta para ela */
condicaoAluno = function () {
const trabalhoNota = 5
const mediaNota = 7
if(condicaoTrabalho(trabalhoNota)&& media(mediaNota)){

    console.log("Passou")
}else {
    console.log("Não passou de ano")
}

}

condicaoAluno()