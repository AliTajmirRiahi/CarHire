import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

const DashChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <Fragment>
      <Line data={data} />
    </Fragment>
  );
};

export default DashChart;
