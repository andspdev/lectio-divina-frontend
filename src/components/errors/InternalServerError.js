import { useContext } from 'react'
import { Context } from '../../includes/GlobalState'

import ImageInternalServerError from '../../assets/images/svg/maintenance-illustration.svg'

const InternalServerError = () =>
{
    const [ stateGlobal ] = useContext(Context)
    
    const refreshHandler = () =>
    {
        window.onbeforeunload = () => {
            return stateGlobal.web.title_confirm_leave;
        }
    }

    return(
        <div className="content-center-full text-center">
            <img src={ImageInternalServerError} alt="Internal Server Error" className='mb-4' />
            <h3 className='title'>Oops, something went wrong</h3>

            <div className='mt-4'>
                <p>The server encountered an internal error or misconfiguration and was unable to complete your request.</p>

                <a href="?refresh" onClick={() => refreshHandler()} className='btn btn-primary btn-primary-ld'>Refresh</a>
            </div>
        </div>
    )
}

export default InternalServerError