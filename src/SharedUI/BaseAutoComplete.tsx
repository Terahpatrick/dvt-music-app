import { baseUrl } from "hooks/useFetch";
import { FC, useContext, useEffect, useState } from "react";
import { SearchContext } from "store/store";
import styled from "styled-components";
import { IMusic } from "./MusicCard";

const Suggestions = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 14rem;
  overflow-y: auto;
  padding-left: 0;
  width: 80%;
  position: absolute;
  background-color: white;
  padding: 5px;
  color: ${(props) => props.theme.secondary};
  & li {
    padding: 0.4rem;
    border-radius: 0.2rem;
  }
  & .suggestion-active,
  & li:hover {
    background-color: ${(props) => props.theme.secondary};
    color: #fae042;
    cursor: pointer;
    font-weight: 700;
  }
  & .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;

const NoSuggestions = styled.div`
  padding: 0.5rem;
  width: 80%;
  position: absolute;
  background-color: white;
  padding: 5px;
  color: ${(props) => props.theme.secondary};
`;

const BaseAutoComplete: FC<{
  search: string;
  active: number;
  show: boolean;
  handleSetShow: (show: boolean) => void;
  handleSetInput: (input: string) => void;
}> = ({ search, active, show, handleSetInput, handleSetShow }) => {
  const { setSearch } = useContext(SearchContext);

  const [tracks, setTracks] = useState<IMusic[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [found, setFound] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}search?q=${search}`);
    const { data } = await res.json();
    if (data?.length > 0) setFound(true);
    else setFound(false);
    setTracks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <>
      {search && show && found && (
        <Suggestions>
          {tracks?.map((suggestion, index) => {
            let className;
            if (index === active) {
              className = "suggestion-active";
            }
            return (
              <li
                className={className}
                key={suggestion?.id}
                onClick={() => {
                  setSearch(suggestion?.title);
                  handleSetInput(suggestion?.title);
                  handleSetShow(false);
                }}
              >
                {suggestion?.title}
              </li>
            );
          })}
        </Suggestions>
      )}
      {search && !isloading && !found && show && (
        <NoSuggestions>
          <em>No suggestions, We didn't find anything for you!</em>
        </NoSuggestions>
      )}
      {isloading && (
        <NoSuggestions>
          <em>searching.......</em>
        </NoSuggestions>
      )}
    </>
  );
};

export default BaseAutoComplete;
