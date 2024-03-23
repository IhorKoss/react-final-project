import {FC, PropsWithChildren} from "react";

import css from './Search.module.css'
import dark from './SearchDark.module.css'
import {useAppContext, useAppSelector} from "../../hook";
import {SearchForm} from "./SearchForm";
import {MoviesList} from "../MoviesContainer/MoviesList";

interface IProps extends PropsWithChildren {

}
const SearchContainer: FC<IProps> = () => {
    const {searchedMovies,totalResults}=useAppSelector(state => state.movies)
    const {theme}=useAppContext()
    return (
        <div className={theme?css.SearchMoviesContainer:searchedMovies.length==0?dark.SearchMoviesContainerEmpty:dark.SearchMoviesContainer}>
            <h2>Let`s find your movie!</h2>
            <SearchForm/>
            {totalResults!==0&&<div>All results:{totalResults}</div>}
            {searchedMovies&&<MoviesList movies={searchedMovies}/>}

        </div>
    );
};

export {SearchContainer};