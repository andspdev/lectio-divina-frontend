import { createContext } from "react"

export const GlobalState = {
    web: {
        title: "Lectio Divina",
        app_name: "Lectio Divina",
        description: "",
        title_confirm_leave: "Apakah Anda yakin ingin meninggalkan halaman ini?"
    },
    api: {
        url: "http://www.google.com"
    },
    bacaan_terload: [],
    fetch_user: 's',
    path_user_login: '/user-login'
}

export const Context = createContext()