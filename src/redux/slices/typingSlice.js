import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  isCorrect: true,
  currentIndex: 0,
  currentSymbol: '',
  totalCount: 0,
  correctCount: 0,
  startTime: 0,
  totalTime: 0,
  speed: 0,
  accuracy: '0.00',
};

export const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.currentSymbol = action.payload[0];
    },
    correct: (state) => {
      state.isCorrect = true;
      state.currentIndex++;
      state.currentSymbol = state.text[state.currentIndex];
      state.totalCount++;
      state.correctCount++;
      state.totalTime = Date.now() - state.startTime;
    },
    wrong: (state) => {
      state.isCorrect = false;
      state.totalCount++;
      state.totalTime = Date.now() - state.startTime;
    },
    setStartTime: (state) => {
      state.startTime = Date.now();
    },
    countSpeed: (state) => {
      state.speed = Math.round(state.totalCount / (state.totalTime / 60000));
    },
    countAccuracy: (state) => {
      state.accuracy = ((state.correctCount / state.totalCount) * 100).toFixed(2);
    },
    reset: (state) => {
      state.isCorrect = true;
      state.currentIndex = 0;
      state.currentSymbol = state.text[0];
      state.totalCount = 0;
      state.correctCount = 0;
      state.speed = 0;
      state.accuracy = 0;
    },
  },
});

export const { setText, correct, wrong, setStartTime, countSpeed, countAccuracy, reset } =
  typingSlice.actions;

export default typingSlice.reducer;
