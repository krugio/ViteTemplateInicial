import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {rootReducer} from './modules/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
    whitelist: [''],

};

// Adicione o reducer diretamente ao rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const nonSerializableMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });

const store = configureStore({
  reducer: persistedReducer,
  middleware: nonSerializableMiddleware,
});


export {store};