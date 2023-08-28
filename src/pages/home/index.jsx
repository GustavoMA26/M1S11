import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"
import  {HomeStyled } from "./styled"

function Home () {
    return(
        <>
            <Header />
                <Main>
                    <HomeStyled>
                            <div>
                                <h1>Hello, I'm Gustavo! </h1>
                                <img src="https://img.icons8.com/ios-filled/150/000000/github.png" alt="github"/>
                                <img src="https://img.icons8.com/ios-filled/150/000000/facebook-new.png" alt="facebook"/>
                                <img src="https://img.icons8.com/ios-filled/150/000000/instagram-new--v1.png" alt="instagram"/>
                                <img src="https://img.icons8.com/ios-filled/150/000000/linkedin.png" alt="linkedin"/>
                            </div>
                    </HomeStyled>
                </Main>
            <Footer />
        </>
    )
}

export { Home }