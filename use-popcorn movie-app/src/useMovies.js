import { useEffect, useState } from "react";
//Creating Custom Hooks. Vid 170
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "8ff86d58";

  useEffect(
    function () {
      //callback?.();
      const controller = new AbortController(); //You use the abort controller as the second argument in a fetch function

      async function fetchMovies() {
        try {
          //Creating loading animation
          setIsLoading(true);
          setError(""); //reseting error state
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            //Accounting for fetch errors
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          //Accounting for no data returned
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            //Cleaning up data fetching
            //vid 156 7:00 - 9:00
            setError(err.message);
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        //we use this clean up function to clean up our data fetching
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
