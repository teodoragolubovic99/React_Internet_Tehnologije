import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <Link to='/' id='home'>Home</Link>
            </nav>
        </div>
    );
}

export default Nav;