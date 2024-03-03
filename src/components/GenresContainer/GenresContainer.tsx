import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IGenre, IMovie} from "../../interfaces";
import {genreService} from "../../services/genreService";
import {GenresButton} from "./GenresButton";
import {GenresMovieList} from "./GenresMovieList";
import css from'./Genres.module.css'

interface IProps extends PropsWithChildren {
}
const GenresContainer: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div>
            <div className={css.GenreBtnContainer}>{genres.map(genre=><GenresButton key={genre.id} genre={genre}/>)}</div>
            <GenresMovieList/>
        </div>
    );
};

export {GenresContainer};