import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesList} from "./MoviesList";

interface IProps extends PropsWithChildren {

}

const MovieContainer: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        movieService.getAll().then(({data})=>setMovies(data.results))
    }, []);
    console.log(movies)
    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MovieContainer};