const obtenerTiempo = (tiempo) => {
  let ahora = new Date(),
    renombrarTiempo = (new Date(tiempo) - ahora + 1000) / 1000,
    renombrarSegundos = ("0" + Math.floor(renombrarTiempo % 60)).slice(-2),
    renombrarMinutos = ("0" + Math.floor((renombrarTiempo / 60) % 60)).slice(
      -2
    ),
    renombrarHoras = ("0" + Math.floor((renombrarTiempo / 3600) % 24)).slice(
      -2
    ),
    renombrarDias = Math.floor(renombrarTiempo / (3600 * 24));

  return {
    renombrarTiempo,
    renombrarDias,
    renombrarHoras,
    renombrarMinutos,
    renombrarSegundos,
  };
};

const Pintar = (tiempo) => {
  let days = document.getElementById("day"),
    hours = document.getElementById("hours"),
    minute = document.getElementById("minute"),
    segund = document.getElementById("segund");
  dialogo = document.getElementById("dialog");

  const actualizarTiempo = setInterval(() => {
    let obtenerT = obtenerTiempo(tiempo);

    days.textContent = obtenerT.renombrarDias;
    hours.textContent = obtenerT.renombrarHoras;
    minute.textContent = obtenerT.renombrarMinutos;
    segund.textContent = obtenerT.renombrarSegundos;

    if (obtenerT.renombrarTiempo <= 1) {
      clearInterval(actualizarTiempo);
      dialogo.classList.add("dialog-visible");

      days.textContent = "0";
      hours.textContent = "0";
      minute.textContent = "0";
      segund.textContent = "0";
    }
  }, 1000);
};

/* MESES EN INGLES

ENERO = January
FEBRERO = February
MARZO = Maart
ABRIL = April
MAYO = May
JUNIO = June
JULIO = July
AGOSTO = August
SEPTIEMBRE = September
OCTUBRE = October
NOVIEMBRE = November
DICIEMBRE = December

*/

let mes = "April",
  dia = "01",
  anio = "2022",
  horaNormal = "01",
  minuto = "01",
  segundos = "01";

// let hora = "Aug 10 2021 17:20:44 GMT-0500";
let hora = `${mes} ${dia} ${anio} ${horaNormal}:${minuto}:${segundos} GMT-0500`;
Pintar(hora);
