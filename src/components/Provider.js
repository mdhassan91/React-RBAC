import { Link } from "react-router-dom"

const Provider = () => {
    return (
        <section>
            <h1>Providers Page</h1>
            <br />
            <p>You must have been assigned an Provider role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Provider
