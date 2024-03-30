import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import '../Order chart/orderchart.css'
const OrderChart = () => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
        const { totalOrders, ordersCancelled, ordersPending } = response.data;

        const total = totalOrders + ordersCancelled + ordersPending;
        const totalOrdersPercentage = ((totalOrders / total) * 100).toFixed(2);
        const ordersCancelledPercentage = ((ordersCancelled / total) * 100).toFixed(2);
        const ordersPendingPercentage = ((ordersPending / total) * 100).toFixed(2);

        setChartData({
          labels: ['Total Orders', 'Orders Cancelled', 'Orders Pending'],
          datasets: [{
            data: [totalOrdersPercentage, ordersCancelledPercentage, ordersPendingPercentage],
            backgroundColor: ['#7FED29', '#F53838', '#DD29ED']
          }]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (window.myChart) {
        window.myChart.destroy();
      }

      window.myChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }, [chartData]);

  return (
    <div className="donut-chart-container">
      <h2 className='Order-title'>Orders Status</h2>
      <canvas ref={chartRef} id="donut-chart" width="400" height="400"></canvas>
    </div>
  );
};

export default OrderChart;
