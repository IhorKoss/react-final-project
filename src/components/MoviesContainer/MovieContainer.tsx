import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesList} from "./MoviesList";
import {usePageQuery} from "../../hook";
interface IProps extends PropsWithChildren {

}

const MovieContainer: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const {page,changePage}=usePageQuery();


    useEffect(() => {
        movieService.getAll(page).then(({data})=>{
            setMovies(data.results);
        })

    }, [page]);

    return (
        <div>
            <button
                onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                disabled={!(parseInt(page)-1)}>Previous</button>
            <button
                onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                disabled={!(parseInt(page)+1)}>Next</button>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MovieContainer};