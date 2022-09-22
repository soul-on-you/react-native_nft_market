import { useMemo } from "react";

const useFilter = (data, filterMode) => {
  const filteredResults = useMemo(() => {
    if (filterMode) {
      return data.filter(filterMode);
    }
    return data;
  }, [data, filterMode]);

  return [filteredResults];
};

export { useFilter };
