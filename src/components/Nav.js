import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <Link to='/' id='home'>Home</Link>
                <Link to='check' id='check'>Check</Link>
            </nav>
        </div>
    );
}

export default Nav;