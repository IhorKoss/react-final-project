import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces";
import {MoviesListCard} from "./MoviesListCard";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    movies:IMovie[]
}

const MoviesList: FC<IProps> = ({movies}) => {
    return (
        <div className={css.MovieContainer}>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};