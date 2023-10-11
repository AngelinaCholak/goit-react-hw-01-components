import React from 'react';
import './data.css';

const generateRandomColor = () => {
  const colors = [
    'rgb(153, 193, 220)',
    'rgb(238, 173, 175)',
    'rgb(159, 203, 176)',
    'rgb(210, 171, 210)',
    'rgb(183, 220, 153)',
    'rgb(218, 220, 153)',
    'rgb(220, 194, 153)'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};


const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      
      <ul className="stat-list ">
        {stats.map((item) => (
          <li className="item" key={item.id} style={{ backgroundColor: generateRandomColor()}}>
            <span className="label label-statistics">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
        </ul>
      
    </section>
  );
};

export default Statistics;


