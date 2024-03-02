import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IGenre, IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {useAppContext, usePageQuery} from "../../hook";

interface IProps extends PropsWithChildren {
    genre:IGenre
}

const GenresButton: FC<IProps> = ({genre}) => {
    const {id,name}=genre;
    const {setWith_genres}=useAppContext()
    const {page}=usePageQuery();


    const genreFind=():void=>{
        setWith_genres(JSON.stringify(id))
    }
    return (
        <button onClick={genreFind}>
            {name}
        </button>
    );
};

export {GenresButton};