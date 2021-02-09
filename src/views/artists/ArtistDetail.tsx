import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Artist, LookupQueryArtistArgs, Query, Scalars} from "../../generated/graphql";
import {LOOK_UP_ARTIST} from "../../requests";
import {Error, Loading} from "../utils";
import {useEffect, useState} from "react";
import {addFavorite, isFavorite, removeFavorite} from "../favorites/favoriteUtils";

interface RouteInfo {
    mbid: Scalars['MBID']
}

const buildFav = (artist: Artist) => {
    return {
        name: artist.name || "",
        id: artist.id,
        mbid: artist.mbid
    };
}

const ArtistDetail: React.FunctionComponent<RouteComponentProps<RouteInfo>> = ({match}) => {
    const {loading, data, error, called} = useQuery<Query, LookupQueryArtistArgs>(LOOK_UP_ARTIST, { variables: { mbid: match.params.mbid } });
    const [isFav, setIsFav] = useState(data?.lookup?.artist ? isFavorite(buildFav(data.lookup.artist)) : false);

    useEffect(() => {
        if (called && !loading && !error) {
            setIsFav(data?.lookup?.artist ? isFavorite(buildFav(data.lookup.artist)) : false);
        }
    }, [called, loading, error, data]);

    return (
        <div className="container artist-detail">
            {loading && <Loading/>}
            {error && <Error error={error}/>}
            {
                called && !loading && !error &&
                    <>
                        <div className="row">
                            <h1 className="col-12 main-title">{data?.lookup?.artist?.name}</h1>
                        </div>
                        <button onClick={() => {
                            if (data?.lookup?.artist) {
                                if (isFav) removeFavorite(buildFav(data.lookup.artist));
                                else addFavorite(buildFav(data.lookup.artist));
                                setIsFav(!isFav);
                            }
                        }}>
                            {
                                isFav ? "Remove from my favorites" : "Add to favorites"
                            }
                        </button>
                        <div className="row">
                            {data?.lookup?.artist?.name}
                        </div>
                    </>
            }
        </div>
        )
}

export default withRouter(ArtistDetail);
