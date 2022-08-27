import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  correct,
  wrong,
  setStartTime,
  countAccuracy,
  countSpeed,
} from '../../redux/slices/typingSlice';

const Text = () => {
  const text = useSelector((state) => state.typing.text);
  const currentIndex = useSelector((state) => state.typing.currentIndex);
  const isCorrect = useSelector((state) => state.typing.isCorrect);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentSymbol = text[currentIndex];

    const onKeydown = (e) => {
      if (e.key != 'Shift') {
        if (currentIndex === 0) dispatch(setStartTime());

        if (currentSymbol === e.key) {
          dispatch(correct());
        } else {
          dispatch(wrong());
        }

        dispatch(countAccuracy());

        if (currentIndex > 10) dispatch(countSpeed());
      }
    };

    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [currentIndex]);

  return (
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
  );
};

export default Text;
