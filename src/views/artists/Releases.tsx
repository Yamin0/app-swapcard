import * as React from "react";
import {useQuery} from "@apollo/client";
import {Artist, BrowseQueryReleasesArgs, Query} from "../../generated/graphql";
import {BROWSE_RELEASES} from "../../requests";
import {useEffect, useState} from "react";
import {Error, Loading} from "../utils";

interface IReleasesProps {
    mbid: string
}

const Releases: React.FunctionComponent<IReleasesProps> = ({mbid}) => {
    const {loading, data, error, called} = useQuery<Query, BrowseQueryReleasesArgs>(BROWSE_RELEASES, { variables: { artist: mbid } });

    return (<div className="row col-12 artist-detail-releases">
        {loading && <Loading/>}
        {error && <Error error={error}/>}
        <div className="col-12 artist-detail-releases-title">
            Some releases
        </div>
        {
            called && !loading && !error && data?.browse?.releases?.nodes &&
            data?.browse?.releases.nodes.map((release, idx) => release && <div key={"release" + idx} className="col-12 col-md-3 artist-detail-releases-thumb">
                <h4 className="artist-detail-releases-thumb-title">
                    {release.title}
                </h4>
            </div>)
        }
    </div>)
}
export default Releases;