
//usando then

module.exports= function(objeto){
fetch(`${objeto.url}?${objeto.parametros}`).then((resposta)=>{
    if (!resposta.ok)throw new Error('Erro na rede');
    return resposta.json()
}).then((resposta)=>{
    console.log(resposta)
}).catch((erro)=>{
    console.log(erro)
})

}


/*
const parametros={
    modules:'summaryProfile',
    token:'b2JXhSTxfWceR85uodUUrN'

}
const objeto={
    url:'https://brapi.dev/api/quote/PETR4',
    parametros: new URLSearchParams(parametros).toString()
   }

conexao(objeto)*/