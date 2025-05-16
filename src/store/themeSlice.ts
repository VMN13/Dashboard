import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type Theme = 'light' | 'dark';

interface ThemeState {
  сurrentTheme: Theme;
}

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    } 
    return 'dark';
}

const initialState: ThemeState = {
  сurrentTheme: getInitialTheme(),
};


const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.сurrentTheme = state.сurrentTheme === 'light'? 'dark' : 'light';
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.сurrentTheme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;