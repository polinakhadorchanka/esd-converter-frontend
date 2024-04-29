import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as filesSliceReducer } from './files/files.slice';

const reducers = combineReducers({
  files: filesSliceReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
