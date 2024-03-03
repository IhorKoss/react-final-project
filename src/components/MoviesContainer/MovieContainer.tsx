import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesList} from "./MoviesList";
import {useAppContext, usePageQuery} from "../../hook";
import css from './Movies.module.css'
import dark from './MoviesDark.module.css'

interface IProps extends PropsWithChildren {

}

const MovieContainer: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const {page,changePage}=usePageQuery();
    const {theme}=useAppContext()


    useEffect(() => {
        movieService.getAll(page).then(({data})=>{
            setMovies(data.results);
        })

    }, [page]);

    return (
        <div className={theme?css.MovieListContainer:dark.MovieListContainer}>
            <div className={css.PageChange}>
                <button className={css.PrevBtn}
                        onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                        disabled={!(parseInt(page)-1)}>Previous</button>
                <div>{page}</div>
                <button className={css.PrevBtn}
                        onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                        disabled={!(parseInt(page)+1)}>Next</button>
            </div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MovieContainer};