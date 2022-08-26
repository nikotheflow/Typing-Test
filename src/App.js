import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { correct, wrong } from './redux/slices/typingSlice';

import StatsList from './components/Stats/StatsList';

import './scss/app.scss';

function App() {
  const text = useSelector((state) => state.typing.text);
  const currentIndex = useSelector((state) => state.typing.currentIndex);
  const isCorrect = useSelector((state) => state.typing.isCorrect);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentSymbol = text[currentIndex];

    const onKeydown = (e) => {
      if (e.key != 'Shift') {
        if (currentSymbol === e.key) {
          dispatch(correct());
        } else {
          dispatch(wrong());
        }
      }
    };

    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [currentIndex]);

  return (
    <div className="wrapper-outer">
      <div className="typing-test wrapper-inner">
        <h2 className="title typing-test__title">Тест скорости печати</h2>
        <div className="typing-test__text-area">
          <p className="typing-test__text">
            {text.split('').map((symbol, id) => (
              <span
                key={id}
                className={
                  id === currentIndex
                    ? isCorrect
                      ? 'symbol_active'
                      : 'symbol_active symbol_wrong'
                    : id < currentIndex
                    ? 'symbol_correct'
                    : ''
                }>
                {symbol}
              </span>
            ))}
          </p>
        </div>
        <div className="typing-test__stats-area">
          <StatsList />
          <button className="btn typing-test__reset-btn">
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
