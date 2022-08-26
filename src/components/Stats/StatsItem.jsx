const StatsItem = ({ title, measure }) => {
  return (
    <li className="stats__item">
      <span className="stats__title">{title}:</span>
      <div className="stats__value-block">
        <span className="stats__value">17</span>
        <span className="stats__measure">{measure}</span>
      </div>
    </li>
  );
};

export default StatsItem;
