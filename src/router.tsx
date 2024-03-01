import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";
import {GenresPage} from "./pages/GenresPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'search', element: <SearchPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
])

export {router}

