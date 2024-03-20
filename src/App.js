import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

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


const App = () =>
{
    const [ state, setState ] = useState(GlobalState)

    return(
        <Context.Provider value={[ state, setState ]}>
            <Suspense fallback={<LoaderFull />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Beranda/>} />
                        <Route path="/masuk" element={<Masuk />} />
                        <Route path="/lupa-sandi" element={null} />
                        <Route path="/daftar" element={<Daftar/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </Context.Provider>
    )
}


export default App