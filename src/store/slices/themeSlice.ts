import {createSlice} from "@reduxjs/toolkit";


interface IState{
    theme:boolean
}

const initialState: IState = {
    theme:null
}

const themeSlice=createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        changeTheme:state=>{
            state.theme=!state.theme
        }
    }
})
const {reducer:themeReducer,actions}=themeSlice;
const themeActions={
    ...actions
}
export {
    themeActions,
    themeReducer
}