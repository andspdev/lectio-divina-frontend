import { useContext, useEffect } from "react"

import { Context } from '../includes/GlobalState'

const Home = () =>
{
    const [ stateGlobal ] = useContext(Context)

    useEffect(() =>
    {
        document.title = stateGlobal.web.title
    }, [ stateGlobal] )

    return(
        <>
        
        </>
    )
}

export default Home