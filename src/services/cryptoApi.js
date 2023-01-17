// logic for fetching the data from the Api

import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders  = {
    'X-RapidAPI-Key': '6fe31e3ed5mshb1dd0573e617166p1ac621jsn8a0eca844a3a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) =>  createRequest(`/coin/${coinId}`),
        })
     })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi

// const options = {      we needa use this data later on
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': '6fe31e3ed5mshb1dd0573e617166p1ac621jsn8a0eca844a3a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };


// we needa create a store before setting up crypto api for our redux application, store -> its 1 central state of
// truth, meaning the entire apps state 
