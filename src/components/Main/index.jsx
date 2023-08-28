import "../Main/style.css"

function Main ({children}) {
    return (
        <div className="main"> 
            {children}
        </div>
    )
}

export { Main }