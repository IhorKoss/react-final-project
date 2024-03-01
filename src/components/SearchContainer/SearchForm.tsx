import {FC, PropsWithChildren, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IApiRes, IMovie, ISearch} from "../../interfaces";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hook";
import {queries} from "@testing-library/react";

interface IProps extends PropsWithChildren {

}

const SearchForm: FC<IProps> = () => {
    const {register,reset,handleSubmit} =useForm<ISearch>({
        mode:'all'
    })
    const [movies, setMovies] = useState<IMovie[]>([])
    const [searched, setSearched] = useSearchParams()
    const {setSearchRes}=useAppContext()
    const [trigger, setTrigger] = useState<boolean>(false)

    const find:SubmitHandler<ISearch>=(inp)=>{
        setSearched({query:inp.searchValue})
        setTrigger(prevState => !prevState)
    }
    useEffect(() => {
        movieService.search(searched.get('query')).then(({data})=>{
            setMovies(data.results);
        });
    }, [trigger]);

    useEffect(() => {
        setSearchRes(movies)
    }, [movies]);
    return (
        <div>
            <form onSubmit={handleSubmit(find)}>
                <input type="text" placeholder={'search'} {...register('searchValue')}/>
                <button>Find!</button>
            </form>
        </div>
    );
};

export {SearchForm};