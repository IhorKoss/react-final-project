import {FC, PropsWithChildren, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IApiRes, IMovie, ISearch} from "../../interfaces";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {useAppContext, usePageQuery} from "../../hook";
import {queries} from "@testing-library/react";

interface IProps extends PropsWithChildren {

}

const SearchForm: FC<IProps> = () => {
    const {register,reset,handleSubmit} =useForm<ISearch>({
        mode:'all'
    })
    const [movies, setMovies] = useState<IMovie[]>([])
    const [searched, setSearched] = useState<string>()
    const [query, setQuery] = useSearchParams()
    const {setSearchRes}=useAppContext()
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
        <div>
            <form onSubmit={handleSubmit(find)}>
                <input type="text" placeholder={'search'} {...register('searchValue')}/>
                <button>Find!</button>
            </form>
            <button
                onClick={() => changePage(JSON.stringify(parseInt(page) - 1) )}
                disabled={!(parseInt(page)-1)}>Previous</button>
            <button
                onClick={() => changePage(JSON.stringify(parseInt(page) + 1) )}
                disabled={!(parseInt(page)+1)}>Next</button>
        </div>
    );
};

export {SearchForm};