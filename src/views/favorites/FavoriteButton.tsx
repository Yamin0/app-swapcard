import {addFavorite, buildFavorite, isFavorite, removeFavorite} from "./favoriteUtils";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {FavContext} from "../../App";
import {Artist} from "../../generated/graphql";

const FavoriteButton: React.FunctionComponent<{artist: Artist}> = ({artist}) => {
    const [currFav, setCurrFav] = useState(buildFavorite(artist));
    const [isFav, setIsFav] = useState(isFavorite(currFav));
    const {fav, updateFav} = useContext(FavContext);
    const [isHover, setIsHover] = useState(false);

    const enterHover = () => setIsHover(true);
    const leaveHover = () => setIsHover(false);

    useEffect(() => {
        setIsFav(isFavorite(currFav));
    }, [fav, currFav]);

    return <button className="btn btn-fav" onClick={() => {
        if (isFav) removeFavorite(currFav);
        else addFavorite(currFav);
        updateFav();
        setIsFav(!isFav);
        setIsHover(!isHover);
    }}>
        {
            (isFav && !isHover) || (!isFav && isHover) ?
                <span className="fas fa-star" onMouseEnter={enterHover} onMouseLeave={leaveHover}/> :
                <span className="far fa-star" onMouseEnter={enterHover} onMouseLeave={leaveHover}/>
        }
    </button>

}

export default FavoriteButton;