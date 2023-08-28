import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { NotFound } from "../pages/notFound/404"
import { About } from "../pages/about/about"
import { Portfolio } from "../pages/Portfolio/index"
import { Contact } from "../pages/contact/index"

function RoutesApp () {
    return (

            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<NotFound/>} path="*" />
                {/* <Route element={<Navigate to "/" replace/>} path="*" /> //Retorno a home*/}
                <Route element={<About/>} path="/about" />
                <Route element={<Portfolio/>} path="/portfolio" />
                <Route element={<Contact/>} path="/contact" />
            </Routes>

    )
}

export { RoutesApp }