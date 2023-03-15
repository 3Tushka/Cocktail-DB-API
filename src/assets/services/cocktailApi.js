import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cocktailApiHeaders = {
    'X-RapidAPI-Key': '6b4f885a56msh7fb9144fae8d2b1p15dabdjsnfb757d87491a',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
}

const baseUrl = 'https://the-cocktail-db.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cocktailApiHeaders });

export const cocktailApi = createApi({
    reducerPath: 'cocktailApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRandomCocktails: builder.query({
            query: () => createRequest(`/randomselection.php`)
        }),
        getOneRandomCoctail: builder.query({
            query: () => createRequest(`/random.php`)
        })
    })
})

export const {
    useGetRandomCocktailsQuery,
    useGetOneRandomCoctailQuery,
} = cocktailApi;