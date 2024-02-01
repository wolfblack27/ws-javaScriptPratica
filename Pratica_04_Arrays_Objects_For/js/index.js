const elementos = [
    { tag: 'p', texto: 'Frase' },
    { tag: 'div', texto: 'Frase2' },
    { tag: 'footer', texto: 'Frase3' },
    { tag: 'section', texto: 'Frase4' }

];



window.addEventListener('load', function () {

    const container = document.querySelector('.container');
    const div = document.createElement('div');
    for (let i = 0; i < elementos.length; i++) {
        let { tag, texto } = elementos[i];
        //Algumas formas de adicinar textos nos componentes:
        
        //1º forma:
        //let tagCriada = document.createElement(tag);
        //tagCriada.innerHTML = texto;
        
        //2º forma:
        //let tagCriada = document.createElement(tag);
        //tagCriada.innerText = texto;

        //3º Forma:
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto)
        tagCriada.appendChild(textoCriado)



        div.appendChild(tagCriada)
    }
    container.appendChild(div)


});