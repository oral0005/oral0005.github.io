// Define data for the charts
const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [100, 150, 200, 180, 250],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
        },
    ],
};

const barChartData = {
    labels: ['Mac', 'iPhone', 'Watch', 'Airpods', 'iPad'],
    datasets: [
        {
            label: 'Units Sold',
            data: [26, 225, 54, 60, 40],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
        },
    ],
};

const pieChartData = {
    labels: ['Mac', 'iPhone', 'Watch', 'Airpods', 'iPad'],
    datasets: [
        {
            data: [26, 225, 54, 60, 40],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
        },
    ],
};

// Create and render the charts
document.addEventListener('DOMContentLoaded', function () {
    // Create a line chart
    const lineChartCanvas = document.getElementById('line-chart').getContext('2d');
    new Chart(lineChartCanvas, {
        type: 'line',
        data: lineChartData,
    });

    // Create a bar chart
    const barChartCanvas = document.getElementById('bar-chart').getContext('2d');
    new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
    });

    // Create a pie chart
    const pieChartCanvas = document.getElementById('pie-chart').getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
    });
});
