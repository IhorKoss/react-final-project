import {FC, PropsWithChildren, useEffect, useState} from "react";

import css from './Search.module.css'
import {useAppContext} from "../../hook";
import {SearchForm} from "./SearchForm";
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {MoviesList} from "../MoviesContainer/MoviesList";

interface IProps extends PropsWithChildren {

}
const SearchContainer: FC<IProps> = () => {
    const {searchRes}=useAppContext()
    return (
        <div className={css.SearchMoviesContainer}>
            <h2>Let`s find your movie!</h2>
            <SearchForm/>
            {searchRes&&<MoviesList movies={searchRes}/>}

        </div>
    );
};

export {SearchContainer};