import  { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const AreaChartExample = ({ allReport }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(15, 119, 255, 0.6)");
    gradient.addColorStop(1, "rgba(15, 119, 255, 0.09)");
    const labels = ["", ...allReport?.map((item) => item.skillName), ""];

    const data = [, ...allReport?.map((item) => item.percentageCorrect), ,];
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "",
            data,
            backgroundColor: gradient,
            borderColor: "rgba(15, 119, 255, 1)",
            borderWidth: 1,
            fill: "start",
            pointHoverRadius: 0,
            hoverBackgroundColor: "rgba(0, 0, 0, 0)",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              padding: 10,
            },
            grid: {
              tickLength: 0,
            },
          },
          x: {
            grid: {
              tickLength: 0,
            },
            ticks: {
              font: {
                size: 12,
                weight: "bold",
              },

              autoSkip: false,
              maxRotation: 10,
              padding: 10,
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0,
          },
        },
      },
    });

        return () => {
            myChart.destroy();
        };
    }, [allReport]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AreaChartExample;
