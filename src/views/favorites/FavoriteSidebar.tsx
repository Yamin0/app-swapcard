import * as React from "react";
import {useContext, useState} from "react";
import {FavContext} from "../../App";
import FavoriteThumb from "./FavoriteThumb";

const NoFavorite: React.FunctionComponent = () => {
    return (
        <div className="favorite-list-empty text-justify">
            You currently have no favorites.
            <br/>
            <br/>
            You can add favorites on the detail page of an artist or directly from the list.
        </div>
    )
}

const FavoriteSidebarClosed: React.FunctionComponent<{ openSidebar(): void }> = ({openSidebar}) => {
    return <div className="favorite-list closed">
        <button className="btn" onClick={openSidebar}>
            <span className="oi oi-star"/>
        </button>
    </div>
}

const FavoriteSidebar: React.FunctionComponent = () => {
    const [toggle, setToggle] = useState(false);
    const {fav, updateFav} = useContext(FavContext);

    const openSidebar = () => {
        updateFav();
        setToggle(true);
    }

    return (
        toggle ?
            <div className="row favorite-list justify-content-center align-items-center">
                <h3 className="favorite-list-title col-12">
                    My favorite artists
                </h3>
                <div className="col-12 favorite-list-thumbs">
                    {
                        fav.favorites.length > 0 ?
                            fav.favorites.map((f, idx) => <FavoriteThumb fav={f}  key={"fav" + idx}/>)
                            : <NoFavorite/>
                    }
                </div>
                <button className="btn btn-close" onClick={() => setToggle(false)}>
                    <span className="oi oi-x"/>
                </button>
            </div>
            : <FavoriteSidebarClosed openSidebar={openSidebar}/>

    )
}

export default FavoriteSidebar;