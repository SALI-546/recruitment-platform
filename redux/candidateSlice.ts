import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définissez les types pour l'état
interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  position: string;
  availability?: string;
  contractType: string;
  education: string;
  skills: string[];
  experience: string;
  motivation: string;
  cv?: string;
  portfolio?: string;
  whyUs: string;
  consent: boolean;
}

interface CandidateState {
  list: Candidate[];
  selected: Candidate | null;
  lang: string;
}

const initialState: CandidateState = {
  list: [],
  selected: null,
  lang: 'en',
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.list.push(action.payload);
    },
    setCandidates: (state, action: PayloadAction<Candidate[]>) => {
      state.list = action.payload;
    },
    setSelectedCandidate: (state, action: PayloadAction<Candidate | null>) => {
      state.selected = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { addCandidate, setCandidates, setSelectedCandidate, setLanguage } = candidateSlice.actions;
export default candidateSlice.reducer;