import * as React from "react";
import {ApolloError, QueryLazyOptions} from "@apollo/client";
import {Error} from "../utils";
import {SearchQueryArtistsArgs} from "../../generated/graphql";
import {setSearch} from "./searchUtils";

interface ISearchEngineProps {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    searchArtists(options?: (QueryLazyOptions<SearchQueryArtistsArgs> | undefined)): void,
    error: ApolloError | undefined
}

export const loadNb = 30;

const SearchEngine: React.FunctionComponent<ISearchEngineProps> = ({query, setQuery, searchArtists, error}) => {

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!e.currentTarget.checkValidity()) {
            (e.currentTarget as HTMLElement).classList.add("was-validated");
        } else {
            setSearch(query);
            searchArtists({variables: {query, first: loadNb}});
        }
    }

    return (
        <form className="form needs-validation row col-12" onSubmit={submit} noValidate={true}>
            {error && <Error error={error}/>}
            <h2 className="form-title second-title col-12">Search a musical artist</h2>
            <div className="form-group col-12 col-md-10">
                <input
                    className="form-control"
                    type="text"
                    value={query}
                    placeholder="Nirvana, Katy Perry..."
                    onChange={(e) => {e.preventDefault(); setQuery(e.target.value);}}
                    required={true}
                />
                <div className="invalid-feedback">
                    Please write the name of the artist you are looking for.
                </div>
            </div>
            <div className="col-6 col-md-2 text-center">
                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Valider
                </button>
            </div>
        </form>
    );
}

export default SearchEngine;