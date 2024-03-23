import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services/genreService";
import {GenresButton} from "./GenresButton";
import {GenresMovieList} from "./GenresMovieList";
import css from'./Genres.module.css'
import dark from './GenresDark.module.css'
import {useAppContext, useAppDispatch, useAppSelector} from "../../hook";
import {genreActions} from "../../store/slices/genreSlice";

interface IProps extends PropsWithChildren {
}
const GenresContainer: FC<IProps> = () => {
    const {allGenres}=useAppSelector(state => state.genres);
    const{theme}=useAppContext();
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