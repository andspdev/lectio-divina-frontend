import { BrowserRouter, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/css/styles.css'
import { Context, GlobalState } from "./includes/GlobalState"
import { useState } from "react"


// Components (Halaman)
import Masuk from "./components/Masuk"


const App = () =>
{
    const [ state, setState ] = useState(GlobalState)

    return(
        <Context.Provider value={[ state, setState ]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element="" />
                    <Route path="/masuk" element={<Masuk />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}


export default App