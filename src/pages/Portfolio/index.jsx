import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { UlStyled } from "./styled"

function Portfolio () {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        const load = async () => {
            const response = await api.get("users/GustavoMA26/repos")
            setRepos(response.data)
        }
        load()
    
    }, [])

    return(
        <>
            <Header />
                <Main>
                    <UlStyled>
                        <h2>Check it out some of my repos on Github:</h2>
                            {
                                repos.length > 0 && repos.map(({name}) => {
                                    return (
                                        <>
                                            <li key={name}>{name}</li>
                                        </>
                                    )
                                })
                            }
                    </UlStyled>
                </Main>


            <Footer />
        </>
    )
}

export { Portfolio }