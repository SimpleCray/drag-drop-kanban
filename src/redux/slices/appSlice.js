import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     kanban: {
//         lists: [],
//     },
// };

const initialState = {
    kanban: {
        lists: [
            {title: 'To do', cards: []}
        ],
    },
};

const authSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setKanban: (state, action) => {
            state.kanban = action.payload;
        },
    },
});

export const { setKanban } = authSlice.actions;

export default authSlice.reducer;
