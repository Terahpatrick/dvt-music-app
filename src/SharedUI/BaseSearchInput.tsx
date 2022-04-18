import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "store/store";

import { ReactComponent as SearchIcon } from "assets/search.svg";
import BaseAutoComplete from "./BaseAutoComplete";

const AutoCompleteWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 100%; */
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & input {
    padding: 0.7rem;
    width: 100%;
    outline: none;
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
    font-family: inherit;

    &::placeholder {
      color: ${(props) => props.theme.primary};
      font-size: 1.2rem;
      font-family: inherit;
    }
  }
`;

export const SearchIconWrapper = styled.div`
  margin-left: -3rem;
  cursor: pointer;
  border-left: 2px solid gray;
  padding-left: 0.4rem;
  & svg {
    fill: ${(props) => props.theme.colorText};
    width: 2rem;
    height: auto;
  }
`;

interface IProps {
  placeholder: string;
}

const BaseSearchInput: FC<IProps> = ({ placeholder }) => {
  const { setSearch, search } = useContext(SearchContext);

  const [inputSearch, setInputSearch] = useState("");
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  async function handleSearch() {
    setSearch(inputSearch);
    setShowSuggestions(false);
  }

  function handleSetInput(input: string) {
    setInputSearch(input);
  }

  function handleSetShow(show: boolean) {
    setShowSuggestions(show);
  }

  return (
    <AutoCompleteWrapper>
      <SearchInputWrapper>
        <input
          placeholder={placeholder}
          onChange={(e) => {
            setInputSearch(e.currentTarget.value);
            setShowSuggestions(true);
          }}
          value={inputSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(e.currentTarget.value);
              setShowSuggestions(false);
            } else if (e.key === "ArrowDown") {
              setActiveSuggestionIndex(activeSuggestionIndex + 1);
            } else if (e.key === "ArrowUp" && activeSuggestionIndex > 0) {
              setActiveSuggestionIndex(activeSuggestionIndex - 1);
            }
          }}
        />

        <SearchIconWrapper onClick={handleSearch}>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchInputWrapper>
      {inputSearch && (
        <BaseAutoComplete
          search={inputSearch}
          active={activeSuggestionIndex}
          show={showSuggestions}
          handleSetInput={handleSetInput}
          handleSetShow={handleSetShow}
        />
      )}
    </AutoCompleteWrapper>
  );
};

export default BaseSearchInput;
