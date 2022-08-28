import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  setText,
  setStartTime,
  correct,
  wrong,
  countAccuracy,
  countSpeed,
} from '../../redux/slices/typingSlice';

const exeptionKeys = ['Shift', 'Alt', 'Control', 'Meta', 'CapsLock'];

const Text = () => {
  const text = useSelector((state) => state.typing.text);
  const currentIndex = useSelector((state) => state.typing.currentIndex);
  const currentSymbol = useSelector((state) => state.typing.currentSymbol);
  const isCorrect = useSelector((state) => state.typing.isCorrect);

  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      fetch('https://fish-text.ru/get?format=json&number=3')
        .then((res) => res.json())
        .then((res) => {
          dispatch(setText(res.text));
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка получения текста!');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const onKeydown = (e) => {
        if (!exeptionKeys.includes(e.key)) {
          if (currentIndex === 0) dispatch(setStartTime());

          if (currentSymbol === e.key) {
            dispatch(correct());
          } else {
            dispatch(wrong());
          }

          dispatch(countAccuracy());

          if (currentIndex > 0) dispatch(countSpeed());
        }
      };

      document.addEventListener('keydown', onKeydown);

      if (currentIndex === text.length) document.removeEventListener('keydown', onKeydown);

      return () => {
        document.removeEventListener('keydown', onKeydown);
      };
    }
  }, [currentIndex, isLoading]);

  return (
    <div className="typing-test__text">
      {!isLoading
        ? text.split('').map((symbol, id) => (
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
          ))
        : 'Загрузка текста...'}
    </div>
  );
};

export default Text;
