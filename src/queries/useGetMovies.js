import { useQuery } from "react-query";
import { getMovies } from "../services/movies";

const QUERY_KEY = "GET_MOVIES";
const useGetMovies = () => {
  const query = useQuery([QUERY_KEY], getMovies);
  return query;
};

export default useGetMovies;
