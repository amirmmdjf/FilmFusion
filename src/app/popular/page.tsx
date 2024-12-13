'use client'
import { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";


function PopularPage() {

    const [movies, setMovies] = useState<null | Array<t>>(null)

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=edaaecce1d1950eba6e9afa047940085&page=1')
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [])


    console.log(movies)  
              
    return ( 
        <>
            <h1 className="text-center text-[32px] my-2">Movies List!</h1>
            <div className="flex flex-wrap justify-center mt-10">
            {
                movies?.map((movie)=>(
                    <div key={movie.id} className="w-[250px] h-[530px] mx-5 mb-8 flex flex-col items-center shadow-lg rounded-lg relative">
                         <Link href={`/popular/${movie.id}`} className="w-full">
                        <img 
                            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} 
                            alt="Image" 
                            className="w-full object-cover h-[300px] rounded-t-lg" 
                        />
                        </Link>
                        <h1 className="text-center mt-4 text-[22px]">{movie.title}</h1>
                        <h2 className="text-center mt-4 text-[16px] text-gray-500">Lang: {movie.original_language}</h2>
                        <h2 className="text-center mt-4 text-[16px] text-gray-500">IMDB: {movie.vote_average.toFixed(1)}</h2>
                        <Link href={`/popular/${movie.id}`} className="bg-blue-600 text-white w-[200px] h-10 mt-5 rounded-xl absolute bottom-5 flex justify-center">
                            <button>More detail</button>
                        </Link>
                    </div>
                ))
            }
            </div>
            
        </>
     );
}
 
export default PopularPage;