import Chart from 'chart.js/auto';

(async function () {


    const xValues = [2018,2019,2020,2021,2022,2023];

new Chart("VLost", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [99.858,99.9,99.525,99.75,99.75,100],
      borderColor: "#da0000",
      label: "Bitdefender",
      fill: false
    }, { 
      data: [98.616,99.725,99.525,98.85,99.1],
      borderColor: "#7fba00",
      label: "Microsoft Defender",
      fill: false
    },
]
  },
  options: {
    legend: {display: true},
    responsive: true,
    // maintainAspectRatio: true,
    // aspectRatio: 1,

    plugins: {

        title: {
            display: true,
            text: 'Evolución de Microsoft Defender y Bitdefender desde 2018 hasta 2023',
        },
        subtitle: {
            display: true,
            text: 'Según www.av-comparatives.org',
            color: '#2a96dc',
            font: {
                size: 12,
                family: 'tahoma',
                weight: 'normal',
                style: 'italic'
            },
            padding: {
                bottom: 10
            }
        }
    },
  }
});


})();