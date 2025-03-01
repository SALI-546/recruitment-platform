// redux/candidateSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  position: string;
  availability: string | null;
  contractType: string;
  education: string;
  skills: string[];
  experience: string;
  motivation: string;
  cv: string | null;
  portfolio?: string;
  whyUs: string;
  consent: boolean;
}

interface CandidateState {
  list: Candidate[];
  selected: Candidate | null;
  lang: string;
}

const loadCandidatesFromLocalStorage = (): Candidate[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('candidates');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const initialState: CandidateState = {
  list: loadCandidatesFromLocalStorage(),
  selected: null,
  lang: 'en',
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.list.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('candidates', JSON.stringify(state.list));
      }
    },
    setSelectedCandidate: (state, action: PayloadAction<Candidate>) => {
      state.selected = action.payload;
    },
    
    setCandidates: (state, action: PayloadAction<Candidate[]>) => {
      state.list = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('candidates', JSON.stringify(state.list));
      }
    },
  },
});

export const { addCandidate, setSelectedCandidate, setCandidates } = candidateSlice.actions;
export default candidateSlice.reducer;
