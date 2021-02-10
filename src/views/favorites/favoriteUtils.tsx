import {Artist} from "../../generated/graphql";

export interface Favorite {
    mbid: string,
    id: string,
    name: string
}

export const initFavorite: Favorite = {
    mbid: "",
    id: "",
    name: ""
};

export interface Favorites {
    favorites: Favorite[]
}

export const getFavorites = () => {
    const favString: string | null = window.localStorage.getItem("musicBrainzFavorites");

    let favObj: Favorites = {
        favorites: []
    };

    if (favString) favObj = JSON.parse(favString);

    return favObj;
}

const setFavorites = (str: string) => {
    window.localStorage.setItem("musicBrainzFavorites", str);
};

export const isFavorite = (fav: Favorite) => {
    let favObj: Favorites = getFavorites();

    return !!favObj.favorites.find(f => JSON.stringify(f) === JSON.stringify(fav))
}

export const addFavorite = (fav: Favorite) => {
    let favObj: Favorites = getFavorites();

    if (!isFavorite(fav))
        favObj.favorites.push(fav);

    setFavorites(JSON.stringify(favObj));
}

export const removeFavorite = (fav: Favorite) => {
    let favObj: Favorites = getFavorites();

    if (isFavorite(fav))
        favObj.favorites.splice(favObj.favorites.findIndex(f => JSON.stringify(f) === JSON.stringify(fav)), 1);

    setFavorites(JSON.stringify(favObj));
}

export const buildFavorite = (artist: Artist) => {
    return {
        name: artist.name || "",
        id: artist.id,
        mbid: artist.mbid
    };
}
