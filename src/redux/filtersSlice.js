import { createSlice} from '@reduxjs/toolkit';


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        status: '',
    },
    reducers: {
        changeFilter: (state, action) => {
        state.status = action.payload;
        }
    }
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;