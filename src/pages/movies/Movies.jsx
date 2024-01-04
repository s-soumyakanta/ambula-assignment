import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://movies-api14.p.rapidapi.com/movies";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "362b6d307bmsh56dc1682c1eadc1p13c28fjsn3052c2583b58",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.movies 
        setMovies(data)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-10 p-4">
      <h1 className="font-bold text-2xl uppercase">Movies</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {movies?.map((movie) => (
          <li key={movie._id} className="space-y-1 shadow-lg bg-blue-950 rounded-md text-white">
            <img src={movie.poster_path} alt={movie.title} className="rounded-t-md" />
            <h2 className="text-lg p-2 font-semibold text-red-500">{movie.title}</h2>
            <p className="p-2"><span className="font-semibold text-red-400">Release Date:</span> {movie.release_date}</p>
            <p className="p-2"><span className="font-semibold text-red-400">Genres:</span> {movie.genres.join(", ")}</p>
            <p className="text-sm p-2">{movie.overview.length > 150 ? `${movie.overview.slice(0, 150)}...` : movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
