import Chart from "chart.js/auto";

(async function () {
  new Chart(document.getElementById("porcentages"), {
    type: "bar",
    data: {
      labels: [
        "Organizaciones con más de una Data Breach",
        "Organizaciones afectadas que aumentaron sus precios al por una Data Breach",
        "Organizaciones afectadas no tenía arquitectura Zero Trust",
        "Data Breaches por robo de credenciales",
        "No tienen arquitectura Zero Trust",
      ],
      datasets: [
        {
          label: "Data Breaches según IBM",
          backgroundColor: [
            "#9107f7",
            "#9107f7",
            "#9107f7",
            "#9107f7",
            "#9107f7",
          ],
          data: [83, 60, 79, 19, 59],
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Data Breaches según IBM",
      },
    },
  });
})();
