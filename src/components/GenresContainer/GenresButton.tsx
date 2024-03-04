import {FC, PropsWithChildren} from "react";

import {IGenre} from "../../interfaces";
import {useAppContext, usePageQuery} from "../../hook";
import css from'./Genres.module.css'

interface IProps extends PropsWithChildren {
    genre:IGenre
}

const GenresButton: FC<IProps> = ({genre}) => {
    const {id,name}=genre;
    const {setWith_genres,theme}=useAppContext()
    const {page}=usePageQuery();


    const genreFind=():void=>{
        setWith_genres(JSON.stringify(id))
    }
    return (
        <button onClick={genreFind} className={css.GenreBtn}>
            {name}
        </button>
    );
};

export {GenresButton};