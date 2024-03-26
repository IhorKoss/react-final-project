import {FC, PropsWithChildren, useEffect, } from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector, usePageQuery} from "../../hook";
import {MoviesList} from "../MoviesContainer/MoviesList";
import css from './Genres.module.css'
import dark from './GenresDark.module.css'
import {movieActions} from "../../store";

interface IProps extends PropsWithChildren {

}


const GenresMovieList: FC<IProps> = () => {
    const {moviesByGenre}=useAppSelector(state => state.movies)
    const {with_genres}=useAppSelector(state => state.genres)
    const dispatch=useAppDispatch();
    const [,setQuery]=useSearchParams();
    const{theme}=useAppSelector(state => state.theme)
    const {page,changePage,defaultPage}=usePageQuery();
    useEffect(() => {
        dispatch(movieActions.getWithGenres({with_genres,page}))
        setQuery({query: with_genres,page})
    }, [with_genres,page]);

    useEffect(() => {
        defaultPage()
    }, [with_genres]);
    return (
        <div className={theme?css.MovieListContainer:dark.MovieListContainer}>
            <div className={theme?css.PageChange:dark.PageChange}>
                <button
                    onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                    disabled={!(parseInt(page)-1)}>&lt;</button>
                <div>{page}</div>
                <button
                    onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                    disabled={!(parseInt(page)+1)}>&gt;</button>
            </div>
            {moviesByGenre&&<MoviesList movies={moviesByGenre}/>}
        </div>
    );
};

export {GenresMovieList};