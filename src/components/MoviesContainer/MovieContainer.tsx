import {FC, PropsWithChildren, useEffect, useState} from "react";

import {MoviesList} from "./MoviesList";
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hook";
import css from './Movies.module.css'
import dark from './MoviesDark.module.css'
import {movieActions} from "../../store";

interface IProps extends PropsWithChildren {

}

const MovieContainer: FC<IProps> = () => {
    const{movies}=useAppSelector(state=>state.movies)
    const {page,changePage}=usePageQuery();
    const{theme}=useAppSelector(state => state.theme)
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page]);

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
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MovieContainer};