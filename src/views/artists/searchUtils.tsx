export const setSearch = (str: string) => {
    window.localStorage.setItem("lastSearch", str);
};

export const getSearch = () => {
    let search: string | null = window.localStorage.getItem("lastSearch");
    if (!search) search = "";

    return search;
}
