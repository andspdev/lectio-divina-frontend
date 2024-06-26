import { useContext, useEffect } from 'react'
import { Context } from '../../includes/GlobalState'

import ImageInternalServerError from '../../assets/images/svg/maintenance-illustration.svg'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () =>
{
    const { pathname } = useLocation()
    const [ stateGlobal ] = useContext(Context)
    
    useEffect(() =>
    {
        document.title = `Halaman Tidak Ditemukan | ${stateGlobal.web.title}`
    }, [ stateGlobal ])

    return(
        <div className="content-center-full text-center">
            <img src={ImageInternalServerError} alt="Not Found" className='mb-4' />
            <h3 className='title'>Halaman Tidak Ditemukan</h3>

            <div className='mt-4'>
                <p>Halaman yang Anda cari <i>{pathname}</i> tidak dapat ditemukan atau sedang dalam perbaikan.</p>

                <Link to="/" className='btn btn-primary btn-primary-ld'>Kembali ke Beranda</Link>
            </div>
        </div>
    )
}

export default NotFound