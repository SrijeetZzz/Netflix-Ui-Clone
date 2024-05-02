// import {
//     configureStore,
//     createAsyncThunk,
//     createSlice,
// }
// from "@reduxjs/toolkit";
// import { TMDB_BASE_URL,API_KEY } from "../utils/constants";
// import axios from "axios";

// const initialState={
//     movies : [],
//     genresLoaded : false,
//     genres : [],

// };

// // createArrayFromRawData={array,moviesArray,genres} = > {
// // array.forEach(element => {
    
// // });
// // };

// const getRawData = async(api,genres,paging)=>{
//     const moviesArray=[];
//     for(let i = 1; moviesArray.length<60 && i<10; i++)
//     {
//         const {data:results}=await axios.get(`${api}${paging ? `&page=${i}` : ""}`
//         // createArrayFromRawData(results,movies,genres);
//         );
//         return moviesArray
//     }
// };

// const NetflixSlice = createSlice(
//     {
//         name: "Netflix",
//         initialState,
//         extraReducers : (builder) => {
//             builder.addCase(getGenres.fulfilled,(state,action)=>{
//                 state.genres = action.payload;
//                 state.genresLoaded = true;
//             })
//         },
//     }
// );

// export const getGenres = createAsyncThunk("netflix/genres",async()=>
// {
//     const { data:{genres} } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
//     return genres;
// })

// export const store= configureStore(
//     {
//         reducer : {
//             netflix : NetflixSlice.reducer,
//         }
//     }
// );

// export const fetchMovies = createAsyncThunk("netflix/trending",
// async({type},thunkApi)=>{
//     const {
//         netflix:{genres},
//     }= thunkApi.getState();
//     return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,genres,true);
// }
// );