import 'bootstrap/dist/css/bootstrap.min.css';
import React, {createContext, useState} from 'react';
import { Router, Route } from "react-router-dom";

import { createBrowserHistory } from 'history';
import Home from "./views/Home";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import ArtistDetail from "./views/artists/ArtistDetail";
import FavoriteSidebar from "./views/favorites/FavoriteSidebar";
import {getFavorites} from "./views/favorites/favoriteUtils";

const client = new ApolloClient({
    uri: 'https://graphbrainz.herokuapp.com/',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    search: {
                        keyArgs: false,
                        merge: true
                    }
                }
            },
        }
    })
});

export let history = createBrowserHistory();

export const FavContext = createContext({
    fav: getFavorites(),
    updateFav: () => {
        return;
    }
});

const App:React.FunctionComponent = () => {
    const [fav, setFav] = useState(getFavorites());

    const updateFav = () => {
        setFav(getFavorites);
    }

    return (
        <ApolloProvider client={client}>
            <FavContext.Provider value={{fav, updateFav}}>
                <Router history={history}>
                    <Header />
                    <FavoriteSidebar />
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/artist/:mbid/"
                        render={() => <ArtistDetail/>}
                    />
                    <Footer/>
                </Router>

            </FavContext.Provider>
        </ApolloProvider>
    );
}

export default App;
