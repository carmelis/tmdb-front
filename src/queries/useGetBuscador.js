import { useQuery } from "react-query";
import { getBuscador } from "../services/buscador";

const QUERY_KEY = "GET_BUSCADOR";
const useGetBuscador = (text) => {
  const query = useQuery([QUERY_KEY, text], () => getBuscador(text));
  return query;
};

export default useGetBuscador;
