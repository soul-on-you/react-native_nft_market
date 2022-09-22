import { useMemo, useState } from "react";

const useSearch = (data, objectKey = null) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchedResults = useMemo(() => {
    if (searchQuery.trim()) {
      const searchQueryLC = searchQuery.toLowerCase();

      if (objectKey)
        return data.filter((data) =>
          data[objectKey].toLowerCase().includes(searchQueryLC)
        );
      else
        return data.filter((data) =>
          data.toLowerCase().includes(searchQueryLC)
        );
    }
    return data;
  }, [data, searchQuery]);

  return [searchedResults, setSearchQuery];
};

export { useSearch };
