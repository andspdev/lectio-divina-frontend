import { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/css/styles.css'
import { Context, GlobalState } from "./includes/GlobalState"
import { useState } from "react"


// Components (Halaman)
import Beranda from "./components/Beranda"
import Masuk from "./components/Masuk"
import LoaderFull from "./includes/LoaderFull"
import NotFound from './components/errors/NotFound'
import Daftar from './components/Daftar'
import { CoresInti } from './includes/CoresInti'
import Dashboard from './components/user_login/Dashboard'
import { LayoutLogin } from './components/user_login/includes/LayoutLogin'
import NotFoundUserLogin from './components/errors/NotFoundUserLogin'


const App = () =>
{
    const [ stateLocal, setStateLocal ] = useState({
        check_user_login: false,
        is_login_user: true
    })

    const [ state, setState ] = useState(GlobalState)

    return(
        <Context.Provider value={[ state, setState ]}>
                <Suspense fallback={<LoaderFull />}>
                    <BrowserRouter>
                        <CoresInti>
                            <Routes>
                                <Route path="/" element={<Beranda/>} />

                                {
                                    stateLocal.check_user_login ? (
                                        <Route path='*' element={<LoaderFull />}/>
                                    ) : (
                                        <>
                                            <Route path='/'>
                                                {
                                                    stateLocal.is_login_user ? (
                                                        <Route path='*' element={<Navigate to={state.path_user_login + '/dasbor'} />} />
                                                    ) : (
                                                        <>
                                                            <Route path="/masuk" element={<Masuk />} />
                                                            <Route path="/lupa-sandi" element={null} />
                                                            <Route path="/daftar" element={<Daftar/>} />
                                                        </>
                                                    )
                                                }
                                            </Route>


                                            {/** User Login */}
                                            <Route path={state.path_user_login}>
                                                {stateLocal.is_login_user ? (
                                                    <>
                                                        <Route path='*' element={<LayoutLogin />}>
                                                            <Route path='dasbor' element={<Dashboard />} />
                                                            <Route path='alkitab' element={null} />

                                                            <Route path="*" element={<NotFoundUserLogin />} />
                                                        </Route>

                                                    </>
                                                ) : (
                                                    <Route path='*' element={<Navigate to="/masuk" />}/>
                                                )}
                                            </Route>
                                        </>
                                    )
                                }

                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </CoresInti>
                    </BrowserRouter>
                </Suspense>
        </Context.Provider>
    )
}


export default App