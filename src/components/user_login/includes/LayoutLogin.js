import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react";

export const LayoutLogin = () =>
{
    const [titleHeader, setTitleHeader] = useState("...");

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