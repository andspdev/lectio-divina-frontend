import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../includes/GlobalState";

export const LayoutLogin = () =>
{
    const [stateGlobal] = useContext(Context)
    const [titleHeader, setTitleHeader] = useState("...");

    useEffect(() =>
    {
        if (titleHeader === '...')
            document.title = `Selamat Datang! | ${stateGlobal.web.title}`
    }, [titleHeader, stateGlobal])

    return(
        <>
            <Header title={titleHeader} />
            <div className="clear-header"></div>

            <div className="content-wrapper">
                <Outlet context={{ setTitleHeader }}/>        
            </div>
        </>
    )
}