import Chart from "chart.js/auto";

(async function () {
  const xValues = [
    "04/2017",
    "06/2018",
    "04/2019",
    "10/2020",
    "08/2021",
    "08/2022",
    "02/2023",
    "04/23",
  ];

  new Chart("AVScores", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [100, 100, 100, 100, 100, 100, 100, 100],
          borderColor: "#da0000",
          label: "Bitdefender Endpoint Security Tools",
          fill: false,
        },
        {
          data: [100, 100, 100, 100, 100, 100, 100, 100],
          borderColor: "#030407",
          label: "McAfee/Trellix",
          fill: false,
        },
        {
          data: [100, 100, 100, 99.4, 100, 100, 100, 100],
          borderColor: "#0279cb",
          label: "Sophos Intercept X",
          fill: false,
        },
        // {
        //   data: [98.8, 100, 99.3, 100, 100, 98.8, 100, 100],
        //   borderColor: "#f9bd1b",
        //   label: "Microsoft Defender",
        //   fill: false,
        // },
        {
          data: [100, 100, 100, 100, 100, 100, 100, 100],
          borderColor: "#4ae08a",
          label: "Kaspersky Endpoint Security",
          fill: false,
        },
        {
          data: [99.4, 100, 99.6, 97.9, 99.7, 99.7, 100, 99.7],
          borderColor: "#6d5af0",
          label: "Promedio de la industria",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      responsive: true,
      // maintainAspectRatio: true,
      // aspectRatio: 1,

      plugins: {
        title: {
          display: true,
          text: "Protección contra ataques de día 0 en Endpoints",
        },
        subtitle: {
          display: true,
          text: "Según www.av-test.org",
          color: "#2a96dc",
          font: {
            size: 12,
            family: "tahoma",
            weight: "normal",
            style: "italic",
          },
          padding: {
            bottom: 10,
          },
        },
      },
    },
  });
})();
