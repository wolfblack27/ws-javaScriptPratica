diaDaSemana = (dia) => {
  switch (dia) {
    case 1:
      return "segunda-feira";

    case 2:
      return "terça-feira";

    case 3:
      return "quarta-feira";

    case 4:
      return "quinta-feira";

    case 5:
      return "sexta-feira";

    case 6:
      return "sabado";

    case 0:
      return "domingo";

    default:
      return "Não foi possivel vefiricar o dia";
  }
};

mesdoAno = function (mes) {
  switch (mes) {
    case 1:
      return "Janeiro";

    case 2:
      return "Fevereiro";

    case 3:
      return "Março";

    case 4:
      return "Abril";

    case 5:
      return "Maio";

    case 6:
      return "Junho";

    case 7:
      return "Julho";

    case 8:
      return "Agosto";

    case 9:
      return "Setembro";

    case 10:
      return "Outubro";

    case 11:
      return "Novembro";

    case 12:
      return "Dezembro";

    default:
      break;
  }
};

window.addEventListener("load", function () {
  const data = prompt("Digite uma data");
  let separadorData = data.toString().split("/");

  const objetoData = new Date(
    Number.parseInt(separadorData[2]),
    Number.parseInt(separadorData[1]),
    Number.parseInt(separadorData[0])
  );

  const saidaTexto = document.querySelector('.text')
  saidaTexto.innerHTML = `${diaDaSemana(objetoData.getDay())},
                            ${mesdoAno(objetoData.getMonth())}    `
  
});
