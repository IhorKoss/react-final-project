import {FC, PropsWithChildren, useEffect, useState} from "react";
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
        <div>
            Go find smth
            <SearchForm/>
            {searchRes&&<MoviesList movies={searchRes}/>}

        </div>
    );
};

export {SearchContainer};