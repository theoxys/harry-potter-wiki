import { useState, useEffect } from "react";
import { APIError } from "../services/api";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: APIError | null;
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  dependencies: any[] = []
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const runAsyncFunction = async (isMounted: boolean) => {
    setState((current) => ({
      ...current,
      loading: true,
      error: null,
    }));

    try {
      const data = await asyncFn();
      if (isMounted) {
        setState({ data, loading: false, error: null });
      }
    } catch (error) {
      if (isMounted) {
        setState({
          data: null,
          loading: false,
          error:
            error instanceof APIError
              ? error
              : new APIError(undefined, "Unknown error"),
        });
      }
    }
  };

  useEffect(() => {
    let mounted = true;

    runAsyncFunction(mounted);

    return () => {
      mounted = false;
    };
  }, dependencies);

  return state;
}
