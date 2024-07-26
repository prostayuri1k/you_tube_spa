import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Authorization from "../Pages/Authorization/Authorization";
import SearchPage from "../Pages/Search/SearchPage";
import Favorites from "../Pages/Search/Favorites/Favorites";
import DefaultSearch from "../Pages/Search/DefaultSearch/DefaultSearch";
import SearchResults from "../Pages/Search/DefaultSearch/SearchResults/SearchResults";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/authorization',
                element: <Authorization/>
            },
            {
                path: '/search',
                element: <SearchPage/>,
                children: [
                    {
                        path: '/search/favorites',
                        element: <Favorites/>
                    },
                    {
                        path:'/search/default',
                        element: <DefaultSearch/>
                    },
                    {
                        path:'/search/default/results',
                        element: <SearchResults/>
                    }
                ]
            }
        ]
    }
])