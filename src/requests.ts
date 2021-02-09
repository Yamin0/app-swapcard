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
                }
            }
        }
    }
`;

export const LOOK_UP_ARTIST: DocumentNode = gql`
    query LookUpArtist($mbid: MBID!) {
        lookup {
            artist(mbid: $mbid) {
                name
                mbid
                id
            }
        }
    }
`;