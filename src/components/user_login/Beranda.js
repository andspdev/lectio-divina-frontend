import { useContext, useEffect, useState } from "react"
import { Context } from "../../includes/GlobalState"
import { useOutletContext } from "react-router-dom";

export const Beranda = () =>
{
    const [, setTitle, , setMenuSelected] = useOutletContext();
    const [ stateLocal ] = useState()
    const [ stateGlobal ] = useContext(Context)

    useEffect(() =>
    {
        const title = 'Dasbor'
        document.title = `${title} | ${stateGlobal.web.title}`

        setTitle('Dasbor')
        setMenuSelected('dasbor')

    }, [ stateLocal, stateGlobal, setTitle, setMenuSelected ])

    return(
        <>
        </>
    )
}

