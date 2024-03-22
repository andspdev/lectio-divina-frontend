import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "../../../../includes/GlobalState";

const AlkitabIndex = () =>
{
    const [, setTitle, , setMenuSelected ] = useOutletContext();
    const [ stateLocal, setStateLocal ] = useState({
        
    })
    const [ stateGlobal ] = useContext(Context)

    useEffect(() =>
    {
        const title = 'Alkitab'
        document.title = `${title} | ${stateGlobal.web.title}`

        setTitle(title)
        setMenuSelected('alkitab')

    }, [ stateLocal, stateGlobal, setTitle, setMenuSelected])

    return(
        <>
        
        </>
    )
}

export default AlkitabIndex