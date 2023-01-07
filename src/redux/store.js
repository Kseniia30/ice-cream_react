import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';

const busketSlice = createSlice({
    name: 'productList',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            return [...state, action.payload];
        },
        deleteProduct: (state, action) => {
            const idx = state.findIndex(
                product =>
                    product.name === action.payload ||
                    product.title === action.payload
            );
            state.splice(idx, 1);
            return state;
        },
    },
});

const choiceSlice = createSlice({
    name: 'choice',
    initialState: [],
    reducers: {
        getList: (state, action) => {
            return (state = action.payload);
        },
        setAmount: (state, action) => {
            state.map(item => {
                return (item.amount = action.payload);
            });
        },
    },
});

const persistConfig = {
    key: 'list',
    storage,
    whiteList: ['productList'],
};

const rootReducer = combineReducers({
    productList: busketSlice.reducer,
    choice: choiceSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const {
    addProduct,
    deleteProduct,
    incrementQuantity,
    decrementQuantity,
} = busketSlice.actions;

export const { getList, setAmount } = choiceSlice.actions;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);
