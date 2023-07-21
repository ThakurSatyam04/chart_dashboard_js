const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20','', '25','', '30','', '35','', '40','', '60','', '65'], // Labels for X-axis
    datasets: [{
      label: 'Data',
      data: [85, 90 , 100,110,120,130,140,160,170,190,220,270,300], // Data for Y-axis
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, // Change the step size between ticks
          callback: function(value) {
            return value; // Append '%' symbol to each Y-axis value
          }
        }
      }
    }
  }
});
