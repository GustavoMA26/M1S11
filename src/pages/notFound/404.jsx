import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"

function NotFound () {
    return(
        <>
            <Header />
                <Main>
                    <p>PÁGINA NÃO ENCONTRADA - 404 ERROR</p>
                </Main>


            <Footer />
    </>
    )
}

export { NotFound }