import { Character } from "../types/Character";
import { api } from "../services/api";
import { useAsync } from "./useAsync";

export function useGetStudents() {
  const {
    data: students,
    loading,
    error,
  } = useAsync<Character[]>(api.characters.getStudents);

  return { students: students || [], loading, error };
}
