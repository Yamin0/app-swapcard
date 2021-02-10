import * as React from "react";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {useState} from "react";
import {setSearch} from "../artists/searchUtils";

const Header: React.FunctionComponent<RouteComponentProps> =  ({ history }) => {
    const [path, setPathname] = useState(window.location.pathname);

    history.listen((location, action) => {
        setPathname(location.pathname);
    });

    return (
        <header className="menu">
            <div className="container">
                <ul className="row justify-content-start align-items-center">
            {
                path !== "/" ?
                    <>
                        <li className="menu-elem">
                            <Link to="/" className="menu-elem-link" onClick={() => setSearch("")} title="Go to Home">
                                <img className="menu-logo img-fluid" src="/images/react-logo.svg" alt="React Logo"/>
                            </Link>
                        </li>
                        <li className="menu-elem back">
                            <Link to="/" className="menu-elem-link" title="Go to list of results">
                                <span className="oi oi-chevron-left"/>
                                Back
                            </Link>
                        </li>
                    </>
                    :
                    <li className="menu-elem">
                        <img className="menu-logo img-fluid" src="/images/react-logo.svg" alt="React Logo"/>
                    </li>
            }
                </ul>
            </div>
        </header>
    )
}

export default withRouter(Header);
