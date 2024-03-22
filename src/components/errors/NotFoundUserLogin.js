import { useContext, useEffect } from 'react'
import { Context } from '../../includes/GlobalState'

import ImageInternalServerError from '../../assets/images/svg/maintenance-illustration.svg'
import { Link } from 'react-router-dom'

const NotFoundUserLogin = () =>
{
    const [ stateGlobal ] = useContext(Context)
    
    useEffect(() =>
    {
        document.title = `Halaman Tidak Ada | ${stateGlobal.web.title}`
    }, [ stateGlobal ])

    return(
        <div className="content-center-full text-center">
            <img src={ImageInternalServerError} alt="Not Found" className='mb-4' />
            <h3 className='title'>Halaman Tidak Ada</h3>

            <div className='mt-4'>
                <p>Halaman yang Anda cari tidak dapat ditemukan atau sedang dalam perbaikan.</p>
            </div>
        </div>
    )
}

export default NotFoundUserLogin