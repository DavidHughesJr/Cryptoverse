 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
        'X-RapidAPI-Key': '419bd5942fmshff5dd7dcf34cd06p1dd32djsne642e068e809',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequests = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequests(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequests(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequests(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
        
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi