import { useQuery } from "react-query";
import { getFavoritos } from "../services/favoritos";

const QUERY_KEY = "GET_FAVORITOS";
const useGetFavoritos = (id) => {
  const query = useQuery([QUERY_KEY],()=> getFavoritos(id));
  return query;
};

export default useGetFavoritos;