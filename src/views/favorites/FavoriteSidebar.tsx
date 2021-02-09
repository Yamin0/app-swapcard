import * as React from "react";
import {useState} from "react";
import {getFavorites} from "./favoriteUtils";

const FavoriteSidebar: React.FunctionComponent = () => {
    const [toggle, setToggle] = useState(false);
    const [fav, setFav] = useState(getFavorites());

    return (
        toggle ?
            <div className="row favorite-list justify-content-center align-items-center">
                <h3 className="favorite-list-title">
                    My favorite artists
                </h3>
                <div>
                    {
                        fav.favorites.map((fav, idx) => <div key={"fav" + idx}>{fav.name}</div>)
                    }
                </div>
                <button onClick={() => setToggle(false)}>
                    <span className="oi oi-chevron-left"/>
                </button>
            </div> :
            <div>
                <button onClick={() => {
                    setFav(getFavorites);
                    setToggle(true);
                }}>
                    <span className="oi oi-chevron-right"/>
                </button>
            </div>
    )
}

export default FavoriteSidebar;