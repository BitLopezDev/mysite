import Chart from "chart.js/auto";

(async function () {
  var xValues = [
    "Costo de Data Breach promedio",
    "Costo de Data Breach de infraestructura crítica",
    "Ahorro al tenerSeguridad con IA totalmente desplegada",
    "Costo promedio de ataque de RansomeWare",
    "Diferencia en costo cuando el teletrabajo es factor en la Data Breach",
  ];
  var yValues = [4350000, 4820000, 3050000, 4540000, 1000000];
  var barColors = ["#4a8bdd", "#4a8bdd", "#4a8bdd", "#4a8bdd", "#4a8bdd"];
  new Chart(document.getElementById("IBMPrices"), {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "Costos de ataques según IBM en USD",
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Información relevante según IBM",
      },
    },
  });
})();
