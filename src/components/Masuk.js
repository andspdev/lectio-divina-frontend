import { useContext, useEffect, useState } from "react"
import { Context } from "../includes/GlobalState"
import { Link, useNavigate } from 'react-router-dom'
import { checkEmailIsValid, checkPasswordIsValid } from "../includes/Functions";

import ImageEye from '../assets/images/svg/eye-light.svg'
import ImageEyeSlash from '../assets/images/svg/eye-slash-light.svg'

import '../assets/css/nprogress-auth.css'

import LoaderFull from "../includes/LoaderFull";
import InternalServerError from "./errors/InternalServerError";


const Masuk = () =>
{
    const navigate = useNavigate()
    const [ stateLocal, setStateLocal ] = useState({
        // Email
        input_email: '',
        error_email: '',
        is_valid_email: false,

        // Passowrd
        input_password: '',
        error_password: '',
        is_valid_pass: false,

        // Check Login
        // check_is_login: true,
        check_is_login: false,

        // Lainnya
        show_pass: false,
        proses_submit_form: false,
        api_error: false,

    })

    const [ stateGlobal ] = useContext(Context) 



    useEffect(() =>
    {
        document.title = `${stateLocal.api_error ? 'Internal Server Error' : 'Masuk'} | ${stateGlobal.web.title}`

        // Check User
        // API Login
        // Membatalkan aksi

    }, [ stateGlobal, stateLocal ])



    // Login Check
    const inputEmailHandler = (e) =>
    {
        const value = e.target.value

        let errorMsg = ''
        let isValid = false
        if (!checkEmailIsValid(value))
            errorMsg = 'Email tidak valid.'

        else
            isValid = !isValid

        setStateLocal(prevState => ({
            ...prevState,
            input_email: value,
            error_email: errorMsg,
            is_valid_email: isValid
        }))
    }


    const inputPasswordHandler = (e) =>
    {
        const value = e.target.value

        let errorMsg = ''
        let isValid = false
        if (!checkPasswordIsValid(value))
            errorMsg = 'Kata sandi tidak valid.'

        else
            isValid = !isValid

        setStateLocal(prevState => ({
            ...prevState,
            input_password: value,
            error_password: errorMsg,
            is_valid_pass: isValid
        }))
    }


    const showPassHandler = (e) =>
    {
        e.preventDefault()

        setStateLocal(prevState => ({
            ...prevState,
            show_pass: !stateLocal.show_pass
        }))
    }


    const formSubmitHandler = (e) =>
    {
        e.preventDefault()

        if (stateLocal.is_valid_email &&
            stateLocal.is_valid_pass)
        {

            setStateLocal(prevState => ({
                ...prevState,
                proses_submit_form: !stateLocal.proses_submit_form
            }))


            // API Login
            navigate('/user-login/dasbor')
        }
    }
    // End Login check




    return(
        <>
            {
            
            // Check Is Login
            stateLocal.check_is_login ? (
                <LoaderFull/>
            ) : 

            // Check Is API Error
            stateLocal.api_error ? (
                <InternalServerError/>
            ) :


            // Lainnya
            (
                <div className="box-account-user">
                    <div className="title mb-5">
                        <h3>{stateGlobal.web.app_name}</h3>
                    </div>
        
                    <div className="content">
                        <div className="mb-3">
                            <b>Masuk</b>
                        </div>
        
                        <form method="post" onSubmit={(e) => formSubmitHandler(e)}>
                            
                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className={'form-control' + (stateLocal.error_email !== '' ? ' is-invalid' : '')} id="email" placeholder="Masukkan email Anda"
                                onChange={(e) => inputEmailHandler(e)} disabled={stateLocal.proses_submit_form} />
        
                                {stateLocal.error_email !== '' ? (
                                    <div className="invalid-feedback d-block">
                                        {stateLocal.error_email}
                                    </div>
                                ) : ''}
                            </div>
                            
                            {/* Password */}
                            <label htmlFor="password" className="form-label">Kata Sandi</label>
                            <div className="mb-3">
                                <div className="input-group">
                                    <input type={stateLocal.show_pass ? 'text' : 'password'} id="password" className={'form-control' + (stateLocal.error_password !== '' ? ' is-invalid' : '')} placeholder="Masukkan kata sandi Anda"
                                    onChange={(e) => inputPasswordHandler(e)} disabled={stateLocal.proses_submit_form} />
        
                                    <div className="input-group-text show-pass">
                                        <a href="#show_pass" onClick={(e) => showPassHandler(e)}>
                                            {
                                                !stateLocal.show_pass ? (                                            
                                                    <img src={ImageEye} className="img-show-pass" alt="Show Password" title="Show Password" />
                                                ) : (
                                                    <img src={ImageEyeSlash} className="img-show-pass" alt="Show Password" title="Show Password" />
                                                )
                                            }
                                        </a>
                                    </div>
                                </div>
        
                                {stateLocal.error_password !== '' ? (
                                    <div className="invalid-feedback d-block">
                                        {stateLocal.error_password}
                                    </div>
                                ) : ''}
                            </div>
        
                            <div className="text-end mb-5">
                                <Link to="/lupa-sandi">Lupa Kata Sandi?</Link>
                            </div>
        
                            <div className="d-grid mb-5">
                                <button className="btn btn-primary btn-primary-ld" disabled={stateLocal.proses_submit_form || 
                                    !(stateLocal.is_valid_email &&
                                    stateLocal.is_valid_pass)
                                }>
                                    {
                                        stateLocal.proses_submit_form ? (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        ) : 'Masuk'
                                    }
                                </button>
                            </div>
                        </form>
        
                        <div className="text-center">
                            <p>Tidak memiliki akun? <Link to="/daftar" className="buat-akun fw-bold">Buat akun sekarang</Link></p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Masuk