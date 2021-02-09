import * as React from "react";
import {SEARCH_ARTISTS} from "../requests";
import {Artist, Maybe, Query, SearchQueryArtistsArgs} from "../generated/graphql";
import {useState} from "react";
import {Loading, LoadingMore} from "./utils";
import SearchEngine from "./artists/SearchEngine";
import ArtistThumb from "./artists/ArtistThumb";
import {useLazyQuery} from "@apollo/client";

const Home: React.FunctionComponent = () => {
    const [query, setQuery] = useState("");
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [searchArtists, {called, loading, data, error, fetchMore}] = useLazyQuery<Query, SearchQueryArtistsArgs>(SEARCH_ARTISTS);

    const total = data?.search?.artists?.totalCount;
    const displayed = data?.search?.artists?.nodes?.length;

    const loadMoreArtists = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (fetchMore) {
            setIsLoadingMore(true);
            fetchMore({
                variables: {after: data?.search?.artists?.pageInfo?.endCursor},
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;

                    return Object.assign({}, prev, {
                        search: {
                            ...fetchMoreResult.search,
                            artists: {
                                ...fetchMoreResult.search?.artists,
                                nodes: [...prev.search?.artists?.nodes as Maybe<Artist>[],
                                    ...fetchMoreResult.search?.artists?.nodes as Maybe<Artist>[]],
                                pageInfo: fetchMoreResult.search?.artists?.pageInfo
                            }
                        }
                    });
                }}).then(() => setIsLoadingMore(false));
        }
    }

    return (
        <div className="container home">
            <div className="row">
                <h1 className="col-12 main-title">Home</h1>
            </div>
            {loading && <Loading/>}
            <div className="row">
                <SearchEngine query={query} setQuery={setQuery} searchArtists={searchArtists} error={error}/>
            </div>
            <div className="row no-gutters">
                {
                    !called &&
                        <div>
                            Welcome to this sample application ! It aims to search musical artists through the MusicBrainz database.
                            <br/>
                            Just type words in the text field above and validate to look through the artists of the database.
                        </div>
                }
                {
                    called && !loading && !error &&
                    <div className="col-12 artist-list-result">
                        {
                            total === 0 ?
                                "No result" :
                                displayed + " results displayed over  " + total + " artists found"
                        }
                    </div>
                }
            </div>
            <div className="row artist-list">
                {
                    !loading && !error && data && data.search && data.search.artists && data.search.artists.nodes &&
                    data.search.artists.nodes.map((a: Maybe<Artist>) => <ArtistThumb key={a?.id} artist={a as Artist}/>)
                }
            </div>
            <div className="row">
                {
                    data?.search?.artists?.pageInfo?.hasNextPage && !isLoadingMore &&
                    <button type="button" className="btn btn-dark btn-plus" onClick={loadMoreArtists}>Load more <span className="oi oi-plus"/></button>
                }
                { isLoadingMore && <LoadingMore/> }
            </div>
        </div>
    );
}

export default Home;
