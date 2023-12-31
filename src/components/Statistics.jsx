
import dataCss from './data.module.css';

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
    <section className={dataCss.statistics}>
      {title && <h2 className={dataCss.title}>{title}</h2>}
      <ul className={dataCss.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={dataCss.item} key={id} style={{ backgroundColor: generateRandomColor()}}>
            <span className={`label ${dataCss.labelStatistics}`}>{label}</span>
            <span className={dataCss.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;


