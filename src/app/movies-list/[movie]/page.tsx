'use client'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  const currentRoute = useParams();
  const movieId = currentRoute.movie;

  useEffect(() => {
    if (movieId) {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=edaaecce1d1950eba6e9afa047940085`)
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
    }
  }, [movieId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieData) {
    return <div>No movie data available</div>;
  }

  console.log(movieData)

  return (
    <div className="flex w-screen  h-screen px-10 py-14">
      <div className="w-5/12  flex justify-center">
        {movieData.backdrop_path && (
          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movieData.backdrop_path}`}
            alt={movieData.original_title}
            className="w-[450px] object-cover h-[550px] rounded-lg"
          />
        )}
      </div>

      <div className="w-7/12 pr-10">
        <h1 className="text-[34px] font-bold mb-10">{movieData.title}</h1>
        <h2 className="text-[18px] font-semibold my-2">About Movie:</h2>
        <p className="text-gray-500 mb-10">{movieData.overview}</p>
        <div className="flex gap-2 mb-10">
        <h2 className="font-semibold">spoken lang:</h2>
        {
            movieData.spoken_languages.map((lang)=>(
                <span className="text-gray-500" key={lang.iso_639_1}>{lang.english_name} -</span>
            ))
        }
        {
          
        }
        </div>
        <div className="flex">
            <p className="font-semibold mr-2">Year: </p>
            <p className="text-gray-500">{movieData.release_date.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
