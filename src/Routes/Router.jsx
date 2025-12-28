import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import RouteError from "../Error/RouteErrorPage/RouteError";
import AppDetails from "../Pages/AppDetails";
import AllApps from "../Pages/AllApps";
import InstalledApp from "../Pages/InstalledApp";

export const router= createBrowserRouter([
    {
        path:"/",
        Component: App,
        errorElement: <RouteError />,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path: '/apps',
                Component: AllApps
            },
            {
                path: '/apps/:id',
                Component: AppDetails
            },
            {
                path: '/installed',
                Component: InstalledApp
            }
        ]
    }
])