import {Artist} from "../../generated/graphql";
import * as React from "react";
import {Link} from "react-router-dom";

interface IArtistThumbProps {
    artist: Artist
}

const ArtistThumb: React.FunctionComponent<IArtistThumbProps> = ({artist}) => {
    const path: string = "/artist/" + artist.mbid + "/";

    return (
        <div className="col-12 col-md-4 row artist-list-thumb justify-content-center align-items-center">
            <h3 className="col-12 artist-list-thumb-title">
                <Link to={path} className="artist-list-thumb-title-link line-clamp">
                    {artist.name}
                </Link>
            </h3>
            <div className="artist-list-thumb-body col-12">
                <p className="artist-list-thumb-type">{artist.type ? artist.type : "Unknown"}</p>
                <p className="module line-clamp artist-list-thumb-description">{artist.disambiguation ? artist.disambiguation : "No information"}</p>
                <Link to={path} className="btn btn-info">
                    See more <span className="oi oi-eye"/>
                </Link>
            </div>
        </div>
    )
}

export default ArtistThumb;