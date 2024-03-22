import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useState } from "react";

export const LayoutLogin = () =>
{
    const [title, setTitle] = useState("...");
    const [menuSelected, setMenuSelected] = useState();
    const [sidebarOpen, setSidebarOpen] = useState();

    return(
        <>
            <Header title={title} menuSelected={menuSelected} />
            <div className="clear-header"></div>

            <div className="content-wrapper">
                <Outlet context={[
                    title, setTitle,
                    menuSelected, setMenuSelected,
                    sidebarOpen, setSidebarOpen
                ]}/>        
            </div>
        </>
    )
}