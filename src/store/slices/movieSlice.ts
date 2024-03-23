import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IApiRes, IMovie} from "../../interfaces";
import {movieService} from "../../services";
interface IState{
    movies: IMovie[],
    movieById:IMovie,
    searchedMovies:IMovie[],
    moviesByGenre:IMovie[]
    totalPages:number,
    totalResults:number,
    trigger:boolean
}
const initialState: IState = {
    movies:[],
    searchedMovies:[],
    moviesByGenre:[],
    movieById:null,
    totalPages:null,
    totalResults:null,
    trigger:null
}
const getAll=createAsyncThunk<IApiRes, { page:string } >(
    'movieSlice/getAll',
    async ({page},{rejectWithValue})=>{
        try{
            const {data} = await movieService.getAll(page);
            return data
        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)
const getById=createAsyncThunk<IMovie,{id:string}>(
    'movieSlice/getById',
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await movieService.getById(id);
            return data
        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getSearched =createAsyncThunk<IApiRes,{searched:string,page:string}>(
    'movieSlice/getSearched',
    async ({searched,page},{rejectWithValue})=>{
        try{
            const {data}=await movieService.search(searched,page)
            return data
        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)
const getWithGenres =createAsyncThunk<IApiRes,{with_genres:string,page:string}>(
    'movieSlice/getWithGenres',
    async ({with_genres,page},{rejectWithValue})=>{
        try{
            const {data}=await movieService.byGenre(with_genres,page)
            return data
        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        resetMovieById:(state)=>{
            state.movieById=null;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                const {results}=action.payload;
                state.movies=results;
            })
            .addCase(getById.fulfilled, (state,action)=>{
                state.movieById=action.payload;
            })
            .addCase(getSearched.fulfilled, (state,action)=>{
                const {results,total_results}=action.payload;
                state.searchedMovies=results;
                state.totalResults=total_results
            })
            .addCase(getWithGenres.fulfilled, (state,action)=>{
                const {results,total_results}=action.payload;
                state.moviesByGenre=results;
                state.totalResults=total_results;
            })
            .addMatcher(isFulfilled(getSearched,getWithGenres),state => {
                state.trigger = !state.trigger;
            })
})

const {reducer:movieReducer,actions}=movieSlice;
const movieActions={
    ...actions,
    getAll,
    getById,
    getSearched,
    getWithGenres
}
export {
    movieActions,
    movieReducer
}