import { HYDRATE, createWrapper, MakeStore } from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

let initialRootState: RootState;

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        if (state === initialRootState) {
            return {
                ...state,
                ...action.payload,
            };
        }
        return state;
    }
    return rootReducer(state, action);
};

export const store = configureStore({
    reducer,
    devTools: process.env.APP_ENV === 'production' ? false : true,
});

const initStore: MakeStore<any> = () => {
    initialRootState = store.getState();
    return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const wrapper = createWrapper(initStore);
