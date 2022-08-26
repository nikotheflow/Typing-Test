import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: 'Знаешь чувство, будто забуксовал? Где-то свернул не туда и путь стал замысловат. И ты ходишь кругами, подбирая слова, сознавая: всё исправить можно, лишь вернувшись назад. Контрамарки — да, действительны, кинолента идёт долго. Запаситесь терпением и попкорном, распишитесь и получите: ретроспектива столь симптоматична, сколь поучительна. Конец двухтысячных был чисто "айс эйдж", никакой хип-хап индустрии, лишь "майспейс". Плюс, яркие мечты объявить им, что я есть дабы невидимым не быть — мою жизнь не писал Уэллс.',
  currentIndex: 0,
  isCorrect: true,
  correctCount: 0,
  totalCount: 0,
  accuracy: 0,
  speed: 0,
};

export const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    correct: (state) => {
      state.currentIndex++;
      state.isCorrect = true;
      state.correctCount++;
      state.totalCount++;
    },
    wrong: (state) => {
      state.isCorrect = false;
      state.totalCount++;
    },
    countAccuracy: (state) => {
      state.accuracy = ((state.correctCount / state.totalCount) * 100).toFixed(2);
    },
  },
});

export const { correct, wrong, countAccuracy } = typingSlice.actions;

export default typingSlice.reducer;
