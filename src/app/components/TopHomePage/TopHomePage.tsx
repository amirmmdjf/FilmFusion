'use client'
import { useState, useEffect } from "react"
import InsideOutPoster from '../../../../public/asset/inside-out2.webp'
import Navbar from "../navbar/Navbar"
import Link from "next/link"

const TopHomePage = () => {

    const [MovieData, setMovieData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/1022789?api_key=edaaecce1d1950eba6e9afa047940085`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Failed to fetch movie data");
          }
          return res.json();
        })
        .then(data => {
          setMovieData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, [])

    console.log(MovieData)
    
    return(
        <div className="relative h-[700px] pt-8">
        <div className="absolute inset-0 bg-custom " />
        <div className="relative z-10 px-[100px]">
          <Navbar />
          <div className="w-full h-[270px] mt-[120px] text-white">
            <h1 className="text-[22px] font-semibold">{MovieData?.original_title || "Loading..."} ({MovieData?.release_date?.split('-')[0] || "Loading..."})</h1>
            <p className="text-gray-200 mt-5 w-4/6 tracking-wide text-[17px]">{MovieData?.overview || "Loading..."}</p>

            <div className="flex flex-col w-full h-[80px] border-l-8 border-red-700 mt-8">
              <div className="flex">

              {MovieData?.genres?.length > 0 ? (
                MovieData.genres.map((movie) => (
                  <h2 className="mx-2 text-[18px] font-semibold" key={movie.id}>
                    <Link href={`/genere/${movie.id}`} className="border-b">
                    {movie?.name || "Loading..."}
                    </Link>
                  </h2>
                ))
                ) : (
                  <h2>Loading genres...</h2>
                )}
              </div>

              <div className="w-full h-[55%] flex items-end relative">
                <p className="text-gray-300 ml-2">IMDB {MovieData?.vote_average || 'Loading...'}</p>
                <p className="ml-8 text-gray-300">{MovieData?.runtime } min</p>
                <p className="ml-8 text-gray-300">{MovieData?.adult ? 'Adult' : 'Adult & Child' || 'Loading...'}</p>
              
                <button className="ml-16 border-b-2 border-red-700 flex py-1">
                <svg className="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                </svg>
                  Add to watchlist
                </button>

                <button className="ml-8 border-2 border-red-700 flex py-2 px-4">
                <svg className="w-6 h-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z" clipRule="evenodd"/>
                </svg>
                  Add to watchlist
                </button>

                <button className="ml-8  bg-red-700 rounded-md text-white font-semibold flex py-2 px-4 absolute right-10 transition hover:bg-red-800">
                <svg className="w-6 h-6 mr-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                </svg>
                  Watch Now
                </button>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default TopHomePage