import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
name:'menu',
initialState: {
    menuStatus: false
},
reducers: {
    menuTrue: state => {
        state.menuStatus = true
    },
    menuFalse: state => {
        state.menuStatus = false
    }
}
})

export const {menuTrue, menuFalse} = menuSlice.actions;
export default menuSlice.reducer;