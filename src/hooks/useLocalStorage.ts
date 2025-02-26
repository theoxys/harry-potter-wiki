import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Função para ler o valor inicial
  const readValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key  "${key}":`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Função para atualizar o valor
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const newValue = value instanceof Function ? value(storedValue) : value;

        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);

        // Dispara um evento customizado para notificar outras instâncias
        window.dispatchEvent(new Event("local-storage-change"));
      } catch (error) {
        console.warn(`Error saving to localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Sincronização com localStorage e entre componentes
  useEffect(() => {
    // Função para atualizar o estado quando o localStorage muda
    const updateState = () => {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
      }
    };

    // Escuta mudanças no localStorage (entre abas)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        updateState();
      }
    };

    // Escuta mudanças locais (mesmo componente/aba)
    const handleLocalChange = () => {
      updateState();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage-change", handleLocalChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-change", handleLocalChange);
    };
  }, [key]); // Removemos readValue das dependências

  return [storedValue, setValue] as const;
}
