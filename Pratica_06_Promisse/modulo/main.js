const conexaoGet = require('./requisicao')
const {objetoAcoes} = require('./indicesBolsa')

const parametros={
    modules:'summaryProfile',
    token:'b2JXhSTxfWceR85uodUUrN'

}
const objeto={
    url:`https://brapi.dev/api/quote/${objetoAcoes.RAIZ4}`,
    parametros: new URLSearchParams(parametros).toString()
   }
conexaoGet(objeto)