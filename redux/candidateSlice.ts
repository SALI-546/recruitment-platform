import { createSlice } from '@reduxjs/toolkit';

const candidateSlice = createSlice({
  name: 'candidates',
  initialState: { list: [], selected: null, lang: 'en' },
  reducers: {
    addCandidate: (state, action) => {
      state.list.push(action.payload);
    },
    setCandidates: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCandidate: (state, action) => {
      state.selected = action.payload;
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addCandidate, setCandidates, setSelectedCandidate, setLanguage } = candidateSlice.actions;
export default candidateSlice.reducer;