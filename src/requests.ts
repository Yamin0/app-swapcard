import {DocumentNode, gql} from "@apollo/client";

export const SEARCH_ARTISTS: DocumentNode = gql`
    query SearchArtists($query: String!, $after: String, $first: Int) {
        search {
            artists(query: $query, after: $after, first: $first) {
                totalCount
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
                nodes {
                    id
                    mbid
                    name
                    type
                    disambiguation
                    gender
                    area {
                        name
                    }
                }
            }
        }
    }
`;

export const LOOK_UP_ARTIST: DocumentNode = gql`
    query LookUpArtist($mbid: MBID!, $type: String = "image") {
        lookup {
            artist(mbid: $mbid) {
                id
                mbid
                name
                type
                area {
                    name
                }
                beginArea {
                    name
                }
                endArea {
                    name
                }
                lifeSpan {
                    begin
                    end
                    ended
                }
                aliases {
                    name
                    type
                }
                rating {
                    value
                }
                mediaWikiImages(type: $type) {
                    url
                }
            }
        }
    }
`;

export const BROWSE_RELEASES: DocumentNode = gql`
    query BrowseReleases($artist: MBID!) {
        browse {
            releases(artist: $artist, first: 20) {
                nodes {
                    title
                    date
                    artistCredits {
                        name
                        joinPhrase
                    }
                }
            }
        }
    }
`;