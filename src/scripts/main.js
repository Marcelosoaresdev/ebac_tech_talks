AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horaEmMS = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);

  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horaEmMS
  );

  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horaEmMS) / minutoEmMs
  );

  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / 1000
  );

  console.log(diasAteOEvento);
  console.log(horasAteOEvento);
  console.log(minutosAteOEvento);
  console.log(segundosAteOEvento);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementsByClassName("hero__text")[0].innerHTML =
      "O Evento de tecnologia foi expirado";
  }
}, 1000);
