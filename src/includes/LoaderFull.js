import { useEffect } from 'react'
import ImageLoader from '../assets/images/svg/loader.svg'

const LoaderFull = () =>
{
    useEffect(() =>
    {
        document.title = 'Harap tunggu sebentar ...'
    }, [])
    
    return(
        <div className="loader-full">
            <img src={ImageLoader} alt="Loader" />
        </div>
    )
}

export default LoaderFull