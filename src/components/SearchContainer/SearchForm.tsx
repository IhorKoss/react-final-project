import {FC, PropsWithChildren, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {IMovie, ISearch} from "../../interfaces";
import {movieService} from "../../services";
import {useAppContext, usePageQuery} from "../../hook";
import css from './Search.module.css'
import dark from './SearchDark.module.css'
import {SearchContainer} from "./SearchContainer";

interface IProps extends PropsWithChildren {

}

const SearchForm: FC<IProps> = () => {
    const {register,handleSubmit} =useForm<ISearch>({
        mode:'all'
    })
    const [movies, setMovies] = useState<IMovie[]>([])
    const [searched, setSearched] = useState<string>()
    const [, setQuery] = useSearchParams()
    const {setSearchRes,theme}=useAppContext()
    const [trigger, setTrigger] = useState<boolean>(false)
    const {page,changePage}=usePageQuery();


    const find:SubmitHandler<ISearch>=(inp)=>{
        setSearched(inp.searchValue)
        setTrigger(prevState => !prevState)
    }
    useEffect(() => {
        movieService.search(searched,page).then(({data})=>{
            setMovies(data.results);
            setQuery({query:searched,page:page})
        });
    }, [trigger,page]);

    useEffect(() => {
        setSearchRes(movies)
    }, [movies]);
    return (
        <div className={theme?css.SearchFormContainer:dark.SearchFormContainer}>
            <form onSubmit={handleSubmit(find)} className={theme?css.SearchForm:dark.SearchForm}>
                <input type="text" placeholder={'What do you want to find?'} {...register('searchValue')}/>
                <button>Find!</button>
            </form>
            {searched&&<div>
                <div className={theme?css.PageChange:dark.PageChange}>
                    <button
                        onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                        disabled={!(parseInt(page)-1)}>Previous</button>
                    <div>{page}</div>
                    <button
                        onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                        disabled={!(parseInt(page)+1)}>Next</button>
                </div>
            </div>}
        </div>
    );
};

export {SearchForm};