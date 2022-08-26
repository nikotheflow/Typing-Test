import { useSelector } from 'react-redux';

const StatsItem = ({ title, property, measure }) => {
  const value = useSelector((state) => state.typing[property]);

  return (
    <li className="stats__item">
      <span className="stats__title">{title}:</span>
      <div className="stats__value-block">
        <span className="stats__value">{value}</span>
        <span className="stats__measure">{measure}</span>
      </div>
    </li>
  );
};

export default StatsItem;
