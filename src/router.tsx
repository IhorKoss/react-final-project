import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";
import {GenresPage} from "./pages/GenresPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

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
                path: 'movies/:id', element: <MovieDetailsPage/>
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

