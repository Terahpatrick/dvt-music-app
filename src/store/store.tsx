import { createContext, FC, useState } from "react";
import { IMusic } from "SharedUI/MusicCard";

export type TSearchContext = {
  search: string;
  setSearch: (c: string) => void;

  tracks: IMusic[];
  setTracks: (data: IMusic[]) => void;
};

export const SearchContext = createContext<TSearchContext>({
  search: "eminem",
  setSearch: () => {},
  tracks: [],
  setTracks: () => {},
});

export const SearchContextProvider: FC<{ children: JSX.Element[] }> = ({
  children,
}) => {
  const [search, setSearch] = useState("eminem");
  const [tracks, setTracks] = useState<IMusic[]>([]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        tracks,
        setTracks,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
