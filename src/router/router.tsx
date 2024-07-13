import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Authorization from "../Pages/Authorization/Authorization";
import SearchPage from "../Pages/Search/SearchPage";

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
                element: <SearchPage/>
            }
        ]
    }
])