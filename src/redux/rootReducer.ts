import { createSlice } from '@reduxjs/toolkit';

interface IState {
    startTime: string;
    term: string;
    categoriesResult: {
        description: string;
        value: string;
    }[];
    formalMember: boolean;
}

const initialState: IState = {
    startTime: '',
    term: '',
    categoriesResult: [],
    formalMember: null,
};

export const rootReducer = createSlice({
    name: 'rootReducer',
    initialState,
    reducers: {
        updateStartTime: (state, { payload }) => {
            state.startTime = payload;
        },
        updateTerm: (state, { payload }) => {
            state.term = payload;
        },
        updateCategoriesResult: (state, { payload }) => {
            state.categoriesResult = payload;
        },
        updateFormalMember: (state, { payload }) => {
            state.formalMember = payload;
        },
    },
});

export const {
    updateStartTime,
    updateTerm,
    updateCategoriesResult,
    updateFormalMember,
} = rootReducer.actions;

export default rootReducer.reducer;
