import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IGenre, IMovie} from "../../interfaces";
import {genreService} from "../../services/genreService";
import {GenresButton} from "./GenresButton";
import {GenresMovieList} from "./GenresMovieList";

interface IProps extends PropsWithChildren {
}
const GenresContainer: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div>
            {genres.map(genre=><GenresButton key={genre.id} genre={genre}/>)}
            <GenresMovieList/>
        </div>
    );
};

export {GenresContainer};