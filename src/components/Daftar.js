import { useContext, useEffect, useState } from "react"
import { Context } from "../includes/GlobalState"
import LoaderFull from "../includes/LoaderFull"
import InternalServerError from "./errors/InternalServerError"
import { checkEmailIsValid, checkNamaLengkapIsValid, checkPasswordIsValid } from "../includes/Functions"
import { Link } from "react-router-dom"

import ImageEye from '../assets/images/svg/eye-light.svg'
import ImageEyeSlash from '../assets/images/svg/eye-slash-light.svg'
import NProgress from "nprogress"


const Daftar = () =>
{
    const [ stateGlobal ] = useContext(Context)
    const [ stateLocal, setStateLocal ] = useState({
        // Nama Lengkap
        input_nama_lengkap: '',
        error_nama_lengkap: '',
        is_valid_nama_lengkap: false,

        // Email
        input_email: '',
        error_email: '',
        is_valid_email: false,

        // Passowrd
        input_password: '',
        error_password: '',
        is_valid_pass: false,


        // Konfirmasi Kata Sandi
        input_konfirmasi_sandi: '',
        error_konfirmasi_sandi: '',
        is_valid_konfirmasi: false,


        // Check login
        check_is_login: false,


        show_pass: false,
        proses_submit_form: false,
        api_error: false,
    })

    
    useEffect(() =>
    {
        document.title = `Daftar | ${stateGlobal.web.title}`

    }, [ stateGlobal ])


    // Register Check
    const inputNamaLengkapHandler = (e) =>
    {
        const value = e.target.value.trim()

        let errorMsg = ''
        let isValid = false
        
        if (!checkNamaLengkapIsValid(value))
            errorMsg = 'Nama lengkap tidak valid.'

        else if (value.length < 1 || value.length > 50)
            errorMsg = 'Nama lengkap minimal 1 dan maksimal 50 karakter.'

        else
            isValid = !isValid

        setStateLocal(prevState => ({
            ...prevState,
            input_nama_lengkap: value,
            error_nama_lengkap: errorMsg,
            is_valid_nama_lengkap: isValid
        }))
    }


    const inputEmailHandler = (e) =>
    {
        const value = e.target.value.trim()

        let errorMsg = ''
        let isValid = false
        if (!checkEmailIsValid(value))
            errorMsg = 'Email tidak valid.'

        else if (value.length < 1 || value.length > 50)
            errorMsg = 'Email minimal 1 dan maksimal 50 karakter.'

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
            errorMsg = 'Kata sandi minimal 6 dan maksimal 18 karakter. Serta mengandung karakter spesial seperti !@#$%^&*()_+{}'

        else
            isValid = !isValid

        setStateLocal(prevState => ({
            ...prevState,
            input_password: value,
            error_password: errorMsg,
            is_valid_pass: isValid
        }))
    }

    const inputKonfirmasiSandiHandler = (e) =>
    {
        const value = e.target.value

        let errorMsg = ''
        let isValid = false
        if (value !== stateLocal.input_password)
            errorMsg = 'Konfirmasi kata sandi tidak sama.'

        else
            isValid = !isValid

        setStateLocal(prevState => ({
            ...prevState,
            input_konfirmasi_sandi: value,
            error_konfirmasi_sandi: errorMsg,
            is_valid_konfirmasi: isValid
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

        if (stateLocal.is_valid_nama_lengkap &&
            stateLocal.is_valid_email &&
            stateLocal.is_valid_pass &&
            stateLocal.is_valid_nama_lengkap && 
            stateLocal.is_valid_konfirmasi)
        {

            setStateLocal(prevState => ({
                ...prevState,
                proses_submit_form: !stateLocal.proses_submit_form
            }))


            // API Login
        }
    }


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

            (
                <div className="box-account-user">
                    <div className="title mb-5">
                        <h3>{stateGlobal.web.app_name}</h3>
                    </div>
        
                    <div className="content">
                        <div className="mb-3">
                            <b>Daftar</b>
                        </div>
        
                        <form method="post" onSubmit={(e) => formSubmitHandler(e)}>
                            
                            {/* Nama lengkap */}
                            <div className="mb-4">
                                <label htmlFor="nama_lengkap" className="form-label">Nama Lengkap</label>
                                <input type="nama_lengkap" className={'form-control' + (stateLocal.error_nama_lengkap !== '' ? ' is-invalid' : '')} id="nama_lengkap" placeholder="Masukkan nama lengkap Anda"
                                onChange={(e) => inputNamaLengkapHandler(e)} disabled={stateLocal.proses_submit_form} />
        
                                {stateLocal.error_nama_lengkap !== '' ? (
                                    <div className="invalid-feedback d-block">
                                        {stateLocal.error_nama_lengkap}
                                    </div>
                                ) : ''}
                            </div>


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
                            <div className="mb-4">
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



                            {/* Konfirmasi Password */}
                            <label htmlFor="konfirmasi_password" className="form-label">Konfirmasi Kata Sandi</label>
                            <div className="mb-5">
                                <input type={stateLocal.show_pass ? 'text' : 'password'} id="konfirmasi_password" className={'form-control' + (stateLocal.error_konfirmasi_sandi !== '' ? ' is-invalid' : '')} placeholder="Masukkan konfirmasi kata sandi Anda"
                                    onChange={(e) => inputKonfirmasiSandiHandler(e)} disabled={stateLocal.proses_submit_form} />
        
                                {stateLocal.error_konfirmasi_sandi !== '' ? (
                                    <div className="invalid-feedback d-block">
                                        {stateLocal.error_konfirmasi_sandi}
                                    </div>
                                ) : ''}
                            </div>
        
        
                            <div className="d-grid mb-5">
                                <button className="btn btn-primary btn-primary-ld" disabled={stateLocal.proses_submit_form || (
                                    !(stateLocal.is_valid_nama_lengkap &&
                                        stateLocal.is_valid_email &&
                                        stateLocal.is_valid_pass &&
                                        stateLocal.is_valid_nama_lengkap &&
                                        stateLocal.is_valid_konfirmasi)
                                )}>
                                    {
                                        stateLocal.proses_submit_form ? (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        ) : 'Daftar'
                                    }
                                </button>
                            </div>
                        </form>
        
                        <div className="text-center">
                            <p>Sudah memiliki akun? <Link to="/masuk" className="buat-akun fw-bold">Masuk sekarang</Link></p>
                        </div>
                    </div>
                </div>
            )

            }
        </>
    )
}

export default Daftar