import {FC, PropsWithChildren, useEffect, useState} from "react";

import {GenresButton} from "./GenresButton";
import {GenresMovieList} from "./GenresMovieList";
import css from'./Genres.module.css'
import dark from './GenresDark.module.css'
import {useAppDispatch, useAppSelector} from "../../hook";
import {genreActions} from "../../store/slices/genreSlice";

interface IProps extends PropsWithChildren {
}
const GenresContainer: FC<IProps> = () => {
    const {allGenres}=useAppSelector(state => state.genres);
    const{theme}=useAppSelector(state => state.theme)
    const dispatch=useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);
    return (
        <div>
            <div className={theme?css.GenreBtnContainer:dark.GenreBtnContainer}>{allGenres.map(genre=><GenresButton key={genre.id} genre={genre}/>)}</div>
            <GenresMovieList/>
        </div>
    );
};

export {GenresContainer};