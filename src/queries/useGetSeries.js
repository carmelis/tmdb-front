import { useQuery } from "react-query";
import { getSeries } from "../services/tv";

const QUERY_KEY = "GET_SERIES";
const useGetMovies = () => {
  const query = useQuery([QUERY_KEY], getSeries);
  return query;
};

export default useGetMovies;
