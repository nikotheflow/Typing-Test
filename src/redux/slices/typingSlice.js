import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: 'Знаешь чувство, будто забуксовал? Где-то свернул не туда и путь стал замысловат. И ты ходишь кругами, подбирая слова, сознавая: всё исправить можно, лишь вернувшись назад. Контрамарки — да, действительны, кинолента идёт долго. Запаситесь терпением и попкорном, распишитесь и получите: ретроспектива столь симптоматична, сколь поучительна. Конец двухтысячных был чисто "айс эйдж", никакой хип-хап индустрии, лишь "майспейс". Плюс, яркие мечты объявить им, что я есть дабы невидимым не быть — мою жизнь не писал Уэллс.',
  currentIndex: 0,
  isCorrect: true,
};

export const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    correct: (state) => {
      state.currentIndex += 1;
      state.isCorrect = true;
    },
    wrong: (state) => {
      state.isCorrect = false;
    },
  },
});

export const { correct, wrong } = typingSlice.actions;

export default typingSlice.reducer;
