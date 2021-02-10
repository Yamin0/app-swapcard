import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Artist, ArtistMediaWikiImagesArgs, LookupQueryArtistArgs, Query, Scalars} from "../../generated/graphql";
import {LOOK_UP_ARTIST} from "../../requests";
import {Error, Loading} from "../utils";
import {useEffect, useState} from "react";
import FavoriteButton from "../favorites/FavoriteButton";
import Releases from "./Releases";

interface RouteInfo {
    mbid: Scalars['MBID']
}

interface LookUpArtistMediaWikiImagesArgs {
    mbid: Scalars['MBID'],
    type: string
}

const ArtistDetail: React.FunctionComponent<RouteComponentProps<RouteInfo>> = ({match}) => {
    const {loading, data, error, called, refetch} = useQuery<Query, LookUpArtistMediaWikiImagesArgs>(LOOK_UP_ARTIST, { variables: { type: "image", mbid: match.params.mbid } });
    const [artist, setArtist] = useState({} as Artist);

    useEffect(() => {
        if (called && !loading && !error && data?.lookup?.artist)
            setArtist(data.lookup.artist);
    }, [called, loading, error, data]);

    useEffect(() => {
        if (error) {
            refetch({ type: "official homepage" });
        }
    }, [error]);

    return (
        <div className="container artist-detail">
            {loading && <Loading/>}
            {error && <Error error={error}/>}
            {
                artist && Object.keys(artist).length > 0 &&
                    <>
                        <div className="row">
                            {
                                artist.rating &&
                                <p className="col-6 col-md-2 order-first artist-detail-rating">
                                    <span className="artist-detail-rating-text">
                                        Rating :
                                        {" " + artist.rating.value}
                                    </span>
                                </p>
                            }
                            <h1 className="col-12 col-md-8 order-6 order-md-4 main-title">{artist.name}</h1>
                            <div className="col-6 col-md-2 order-4 order-md-12 text-right">
                                <FavoriteButton artist={artist}/>
                            </div>
                        </div>
                        <div className="row">
                            <p className="artist-detail-personal col-12 row">
                                <span>Type : <br className="d-none d-md-block"/>{artist.type ? artist.type : "Unknown"}</span>
                                <span>Gender : <br className="d-none d-md-block"/>{artist.gender ? artist.gender : "Unknown"}</span>
                                <span>Area : <br className="d-none d-md-block"/>{artist.area?.name ? artist.area?.name : "Unknown"}</span>
                                <span>Begin : <br className="d-none d-md-block"/>{artist.lifeSpan?.begin ? artist.lifeSpan?.begin : "Unknown"}</span>
                                <span>Begin area : <br className="d-none d-md-block"/>{artist.beginArea?.name ? artist.beginArea?.name : "Unknown"}</span>
                                {
                                    artist.lifeSpan?.ended ?
                                        <>
                                            <span>End : <br className="d-none d-md-block"/>{artist.lifeSpan?.end ? artist.lifeSpan?.end : "Unknown"}</span>
                                            <span>End area : <br className="d-none d-md-block"/>{artist.endArea?.name ? artist.endArea?.name : "Unknown"}</span>
                                        </> : null
                                }
                                {
                                    artist.aliases?.find((alias) => alias?.type !== "Search hint") ?
                                        <span>
                                            Aliases : <br className="d-none d-md-block"/>
                                            {
                                                artist.aliases?.filter((alias) => alias?.type !== "Search hint").map((alias, idx, arr) => alias &&
                                                    <span key={"alias" + idx}>{alias.name} {idx !== arr.length - 1 ? "," : ""} <br className="d-none d-md-block"/></span>)
                                            }
                                        </span>
                                        : null
                                }
                            </p>
                            {
                                artist.disambiguation &&
                                    <p className="col-12 text-center artist-detail-description">
                                        {artist.disambiguation}
                                    </p>
                            }
                            {
                                artist.mediaWikiImages?.length > 0 && artist.mediaWikiImages[0] &&
                                    <div className="col-12 col-md-4">
                                        <img className="img-fluid artist-detail-img" src={artist.mediaWikiImages[0].url} alt={artist.name || ""}/>
                                    </div>
                            }
                            {
                                artist.mbid &&
                                <Releases mbid={artist.mbid}/>
                            }
                        </div>
                    </>
            }
        </div>
        )
}

export default withRouter(ArtistDetail);
