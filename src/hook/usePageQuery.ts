import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page:'1'})
    const page:string=query.get('page')
    return {
        page,
        changePage : (newPage:string)=>{
            setQuery({ ...query, page: newPage})
        },
    };
};

export {usePageQuery};