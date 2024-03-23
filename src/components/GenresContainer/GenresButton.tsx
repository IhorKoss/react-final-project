import {FC, PropsWithChildren} from "react";

import {IGenre} from "../../interfaces";
import {useAppContext, useAppDispatch, usePageQuery} from "../../hook";
import css from'./Genres.module.css'
import {genreActions} from "../../store/slices/genreSlice";

interface IProps extends PropsWithChildren {
    genre:IGenre
}

const GenresButton: FC<IProps> = ({genre}) => {
    const {id,name}=genre;
    const dispatch=useAppDispatch()


    const genreFind=():void=>{
        dispatch(genreActions.setGenreId(JSON.stringify(id)));
    }
    return (
        <button onClick={genreFind} className={css.GenreBtn}>
            {name}
        </button>
    );
};

export {GenresButton};