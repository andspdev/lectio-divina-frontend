import { useContext, useEffect } from 'react'
import { Context } from '../../includes/GlobalState'

import ImageInternalServerError from '../../assets/images/svg/maintenance-illustration.svg'
import { useOutletContext } from 'react-router-dom';

const NotFoundUserLogin = () =>
{
    const [, setTitle, , setMenuSelected ] = useOutletContext();
    const [ stateGlobal ] = useContext(Context)
    
    useEffect(() =>
    {
        const title = 'Halaman Tidak Ditemukan'
        document.title = `${title} | ${stateGlobal.web.title}`
        
        setTitle('...')
        setMenuSelected ()
    }, [ stateGlobal, setTitle, setMenuSelected ])

    return(
        <div className="content-center-full text-center">
            <img src={ImageInternalServerError} alt="Not Found" className='mb-4' />
            <h3 className='title'>Halaman Tidak Ditemukan</h3>

            <div className='mt-4'>
                <p>Halaman yang Anda cari tidak dapat ditemukan atau sedang dalam perbaikan.</p>
            </div>
        </div>
    )
}

export default NotFoundUserLogin