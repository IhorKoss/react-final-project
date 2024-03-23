import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IApiRes, IGenre} from "../../interfaces";
import {AxiosError} from "axios/index";
import {genreService} from "../../services/genreService";
import {IApiGenreRes} from "../../interfaces/IApiGenreRes";

interface IState{
    allGenres:IGenre[],
    with_genres:string
}

const initialState: IState = {
    allGenres:[],
    with_genres:null
}
const getAll=createAsyncThunk<IApiGenreRes>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await genreService.getAll();
            return data
        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice=createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        setGenreId:(state,action)=>{
            state.with_genres=action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                const {genres}=action.payload;
                state.allGenres=genres;
        })

})
const {reducer:genreReducer,actions}=genreSlice;
const genreActions={
    ...actions,
    getAll
}
export {
    genreActions,
    genreReducer
}