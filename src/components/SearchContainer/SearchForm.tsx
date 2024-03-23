import {FC, PropsWithChildren, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {ISearch} from "../../interfaces";
import {useAppContext, useAppDispatch, useAppSelector, usePageQuery} from "../../hook";
import css from './Search.module.css'
import dark from './SearchDark.module.css'
import {movieActions} from "../../store";

interface IProps extends PropsWithChildren {

}

const SearchForm: FC<IProps> = () => {
    const {register,handleSubmit} =useForm<ISearch>({
        mode:'all'
    })
    const dispatch = useAppDispatch();
    const [searched, setSearched] = useState<string>()
    const [, setQuery] = useSearchParams()
    const {theme}=useAppContext()
    const {trigger}=useAppSelector(state => state.movies)
    const {page,changePage}=usePageQuery();


    const find:SubmitHandler<ISearch>=(inp)=>{
        setSearched(inp.searchValue)
    }
    useEffect(() => {
        dispatch(movieActions.getSearched({searched,page}))
        setQuery({query:searched,page:page})
    }, [trigger,page]);
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