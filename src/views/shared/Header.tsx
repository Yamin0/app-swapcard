import * as React from "react";
import {Link} from "react-router-dom";

const Header: React.FunctionComponent =  () => {

    return (
        <header className="row menu">
            <ul>
                <li className="menu-elem" >
                    <Link to="/" className="menu-elem-link">Back to Home</Link>
                </li>
            </ul>
        </header>
    )
};

export default Header;
