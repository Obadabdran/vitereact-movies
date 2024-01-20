import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const popularApiHeaders={
    'Key': '70f20a13fec4eebba3f0278bf0255aae',
   ' Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDgyZjgyZDMyZmQzMzYyZjM5YTliYjkyMjUwM2Q2NyIsInN1YiI6IjY0Zjk5YzYwYThiMmNhNGYxYmM5MDA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8q6Dj1omN0bWyRR1Yu7n0NWIo5IgFPaQ8u6ko1_BjY'
}

const createRequest=(url)=>({url})
export const popularApi = createApi({
  reducerPath: 'ppopularApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopularApi: builder.query({
      query: () => createRequest('movie/popular?api_key=d7dc692330057c503354cbc5acf6fa5e'),
    }),
    getPopularSeriesApi: builder.query({
      query: () => createRequest('tv/popular?api_key=d7dc692330057c503354cbc5acf6fa5e'),
    }),
    getDetailsApi: builder.query({
      query: ({type,id}) => createRequest(`${type}/${id}?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getCreditApi: builder.query({
      query: ({type,id}) => createRequest(`${type}/${id}/credits?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getSimilarApi: builder.query({
      query: ({type,id}) => createRequest(`${type}/${id}/similar?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getVedioApi: builder.query({
      query: ({type,id}) => createRequest(`${type}/${id}/videos?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getSearchApi: builder.query({
      query: () => createRequest(`search/multi?query=batman&include_adult=false&language=en-US&page=1?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getGenMovieApi: builder.query({
      query: () => createRequest(`genre/movie/list?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getGenSerieApi: builder.query({
      query: () => createRequest(`genre/tv/list?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
    getGenSearchApi: builder.query({
      query: (id) => createRequest(`list/${id}?api_key=d7dc692330057c503354cbc5acf6fa5e`),
    }),
   
   
  }),
})


export const { useGetPopularApiQuery,useGetPopularSeriesApiQuery, useGetDetailsApiQuery,useGetCreditApiQuery,useGetSimilarApiQuery,useGetVedioApiQuery,useGetSearchApiQuery,useGetGenMovieApiQuery,useGetGenSerieApiQuery,useGetGenSearchApiQuery } = popularApi
