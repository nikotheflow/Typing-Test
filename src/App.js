import { useDispatch, useSelector } from 'react-redux';

import Text from './components/Text';
import StatsList from './components/Stats/StatsList';

import { reset } from './redux/slices/typingSlice';

import './scss/app.scss';

function App() {
  const text = useSelector((state) => state.typing.text);
  const currentIndex = useSelector((state) => state.typing.currentIndex);

  const dispatch = useDispatch();

  const onClickReset = (e) => {
    dispatch(reset());
    e.target.blur();
  };

  return (
    <div className="wrapper">
      <div className="typing-test">
        <div className="typing-test__header">
          <h2 className="typing-test__title">Тест скорости печати</h2>
          <p className="typing-test__subtitle">
            {currentIndex === text.length && text.length !== 0
              ? 'Тест окончен! Пожалуйста, ознакомьтесь с результатами.'
              : 'Тест начнётся после первого правильно введённого символа.'}
          </p>
        </div>

        <div className="typing-test__text-area">
          <Text />
        </div>
        <div className="typing-test__stats-area">
          <StatsList />
          <button className="btn typing-test__reset-btn" onClick={(e) => onClickReset(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z" />
            </svg>
            Начать заново
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
