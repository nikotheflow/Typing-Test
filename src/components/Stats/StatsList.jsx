import StatsItem from './StatsItem';

const StatsListArray = [
  { title: 'Время', property: 'totalTime', measure: ' мс' },
  { title: 'Скорость', property: 'speed', measure: ' зн./мин' },
  { title: 'Точность', property: 'accuracy', measure: '%' },
];

const StatsList = () => {
  return (
    <ul className="stats">
      {StatsListArray.map((obj, i) => (
        <StatsItem {...obj} key={i} />
      ))}
    </ul>
  );
};

export default StatsList;
