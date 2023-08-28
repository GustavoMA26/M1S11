import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"
import { HomeStyled } from "../home/styled"


function About () {
    return (
        <>
            <Header />
                <Main>
                    <HomeStyled>
                        <div>
                            <p>I've worked with Digital Marketing and Customer Success for the last seven years. During this time, I also had an opportunity to dive into the entrepreneurial world.</p>

                            <p>In the SaaS industry - as an ISM and CSM - I managed more than 150+ companies from different segments and sizes, pursuing an outstanding relationships with clients. Additionally, I was responsible for onboarding new clients and helping them with their Customer Journey Strategy. </p>

                            <p>Running a digital agency as an entrepreneur, I got the experience to explore other duties in the martech world, such as: running paid media campaigns with massive budgets, building dashboards (using Google Looker or Power BI), creating inbound marketing plans, tracking and measuring websites/apps and so on.</p>

                            <p>I graduated with a Bachelor of Business Administration (B.B.A.) and specialized in Data Science & Business Analytics. In the last one, I implemented a Business Intelligence solution with Power BI and SQL Server using Kaggle's public dataset as a final project (creating all components such as ODS, Data Warehouse, ETL process, and so on).</p>

                            <p>As an avid learner, I am always looking for new knowledge and challenges.</p>
                        </div>
                    </HomeStyled>
                </Main>


            <Footer />
        </>
    )
}

export { About }