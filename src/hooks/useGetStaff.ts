import { Character } from "../types/Character";
import { api } from "../services/api";
import { useAsync } from "./useAsync";

export function useGetStaff() {
  const {
    data: staff,
    loading,
    error,
  } = useAsync<Character[]>(api.characters.getStaff);

  return { staff: staff || [], loading, error };
}
