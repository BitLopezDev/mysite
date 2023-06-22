import Chart from 'chart.js/auto';

(async function () {


    const xValues = ['2014','2015','2016','2017','2018','2019','2020', '2021', '2022'];

new Chart("databreach", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [3500000,3790000,4000000,3620000,3860000,3920000,3860000,3898600],
      borderColor: "#da0000",
      label: "Coste total de Data Breach en USD",
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
            text: 'Coste total de Data Breaches',
        },
        subtitle: {
            display: true,
            text: 'Según IBM',
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