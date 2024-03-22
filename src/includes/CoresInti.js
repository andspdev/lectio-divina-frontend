import NProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CoresInti = ({ children }) =>
{
    const { pathname } = useLocation();

    useEffect(() => 
    {
        window.scrollTo(0, 0);

        NProgress.start()
        setTimeout(() => NProgress.done(), 150);

      }, [ pathname ]);

    return children
}