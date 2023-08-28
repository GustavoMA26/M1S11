import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"
import "./styled.css"



function Contact () {
    return(
        <>
            <Header />
                <Main>
                    <div className="form-container">
                        <h2>Get in touch!</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                            />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                            />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                            />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Number:</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="number"
                                />
                            </div>
                            <button type="submit" className="submit-button">Submit!</button>
                        </form>
                    </div>
                </Main>
            <Footer />
        </>
    )
}

export { Contact }