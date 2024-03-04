import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services/genreService";
import {GenresButton} from "./GenresButton";
import {GenresMovieList} from "./GenresMovieList";
import css from'./Genres.module.css'
import dark from './GenresDark.module.css'
import {useAppContext} from "../../hook";

interface IProps extends PropsWithChildren {
}
const GenresContainer: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    const{theme}=useAppContext()
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div>
            <div className={theme?css.GenreBtnContainer:dark.GenreBtnContainer}>{genres.map(genre=><GenresButton key={genre.id} genre={genre}/>)}</div>
            <GenresMovieList/>
        </div>
    );
};

export {GenresContainer};