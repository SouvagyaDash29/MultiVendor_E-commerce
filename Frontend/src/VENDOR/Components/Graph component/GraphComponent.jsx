import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import '../Graph component/graph-container.css'
const GraphComponent = () => {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        // Fetch graph data from the backend
        const response = await axios.get('MY_BACKEND_API_ENDPOINT_FOR_GRAPH_DATA');
        const { labels, data } = response.data;

        setGraphData({
          labels: labels,
          datasets: [{
            label: 'Graph Data',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize the background color
            borderColor: 'rgba(75, 192, 192, 1)', // Customize the border color
            borderWidth: 1
          }]
        });
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchGraphData();
  }, []);

  useEffect(() => {
    // Render graph
    const ctx = document.getElementById('graph-chart');

    if (ctx && graphData.labels && graphData.labels.length > 0) {
      new Chart(ctx, {
        type: 'bar', // Change the type of graph if needed (e.g., line, pie, etc.)
        data: graphData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [graphData]);

  return (
    <div className="graph-container">
     <h1 className='Graph-heading'> Graph</h1>
      <canvas id="graph-chart" width="400" height="200"></canvas>
    </div>
  );
};

export default GraphComponent;
