import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";

interface IProps extends PropsWithChildren {
    movies:IMovie[]
}

const MoviesList: FC<IProps> = ({movies}) => {
    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};