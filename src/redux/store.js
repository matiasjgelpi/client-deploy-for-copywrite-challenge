import {configureStore} from '@reduxjs/toolkit';
import reverseTextReducer from './reverseTextSlice';

export default configureStore({
    reducer: {
        reversedTexts: reverseTextReducer,
    }
})