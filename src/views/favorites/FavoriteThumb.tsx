import * as React from "react";
import {Favorite, removeFavorite} from "./favoriteUtils";
import {useContext} from "react";
import {FavContext} from "../../App";
import {Link} from "react-router-dom";

const FavoriteThumb: React.FunctionComponent<{ fav: Favorite }> = ({fav}) => {
    const {updateFav} = useContext(FavContext);

    const deleteFav = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeFavorite(fav);
        updateFav();
    }

    return (<div className="favorite-list-thumb">
        <Link to={"/artist/" + fav.mbid + "/"} className="favorite-list-thumb-link">
            {fav.name}
        </Link>
        <button type="button" onClick={deleteFav} className="btn btn-danger">
            <span className="oi oi-trash"/>
        </button>
    </div>);
}

export default FavoriteThumb;