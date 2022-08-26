import StatsItem from './StatsItem';

const StatsListArray = [
  { title: 'Скорость', measure: ' зн./мин' },
  { title: 'Точность', measure: '%' },
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
