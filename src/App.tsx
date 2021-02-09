import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Route } from "react-router-dom";

import { createBrowserHistory } from 'history';
import Home from "./views/Home";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import ArtistDetail from "./views/artists/ArtistDetail";
import FavoriteSidebar from "./views/favorites/FavoriteSidebar";

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

class App extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
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
            </ApolloProvider>
        );
    }
}

export default App;
