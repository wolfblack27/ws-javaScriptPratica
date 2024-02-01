




window.addEventListener('load',function(){

    const componente = document.querySelector('.lista-legumes');
    
    const listaLegumes = ['Batata Doce','Mandioca Branca','Beterraba','Cenoura','Batata','Cebola','Rabanete','Abobora','Mandioca'];
    
    for(legume in listaLegumes){
        let novoProduto = document.createElement('li');
        novoProduto.innerHTML = listaLegumes[legume];
        componente.appendChild(novoProduto);
        
    }
    
    
    
    
  /*   let elementos = componente.children
    for(valor in elementos){
        console.log(elementos[valor].innerHTML);

    } */

});


function createLista(comp, dado){

    

};