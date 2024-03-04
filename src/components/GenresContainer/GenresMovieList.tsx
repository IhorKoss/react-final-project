import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {useAppContext, usePageQuery} from "../../hook";
import {MoviesList} from "../MoviesContainer/MoviesList";
import css from './Genres.module.css'
import dark from './GenresDark.module.css'

interface IProps extends PropsWithChildren {

}


const GenresMovieList: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [,setQuery]=useSearchParams();
    const {with_genres,theme}=useAppContext()
    const {page,changePage,defaultPage}=usePageQuery();
    useEffect(() => {
        movieService.byGenre(with_genres,page).then(({data})=>{
            setMovies(data.results);
        });
        setQuery({query: with_genres,page})
    }, [with_genres,page]);

    useEffect(() => {
        defaultPage()
    }, [with_genres]);

    console.log(with_genres)
    console.log(page)
    return (
        <div className={theme?css.MovieListContainer:dark.MovieListContainer}>
            <div className={theme?css.PageChange:dark.PageChange}>
                <button
                    onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                    disabled={!(parseInt(page)-1)}>Previous</button>
                <div>{page}</div>
                <button
                    onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                    disabled={!(parseInt(page)+1)}>Next</button>
            </div>
            {movies&&<MoviesList movies={movies}/>}
        </div>
    );
};

export {GenresMovieList};