import { Character } from "../types/Character";
import { api } from "../services/api";
import { useAsync } from "./useAsync";

export function useGetAllCharacters() {
  const {
    data: characters,
    loading,
    error,
  } = useAsync<Character[]>(api.characters.getAll);

  return { characters: characters || [], loading, error };
}
