import {createSlice} from "@reduxjs/toolkit";

const appSclice = createSlice
({
        name : "app",
        initialState: {
            isMenuOpen: true,
        },
        reducers: {
            toggleMenu: (state) => {
                state.isMenuOpen = !state.isMenuOpen;
            },
            closeMenu:(state) => {
                state.isMenuOpen =false;
            },
        },
});


export const { toggleMenu, closeMenu } = appSclice.actions;

export default appSclice.reducer;