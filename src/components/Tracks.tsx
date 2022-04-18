import { useFetch } from "hooks/useFetch";
import { FC, useContext } from "react";
import MusicCard, { IMusic } from "SharedUI/MusicCard";
import { SearchContext } from "store/store";
import styled from "styled-components";
import { device } from "utils/breakPoints";

const MusicContainerStyled = styled.div`
  display: flex;
  padding: 2rem 6rem;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #1c0b47;

  @media ${device.tablet} {
    justify-content: center;
    padding: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #1c0b47;
  min-height: 100vh;
`;

const Tracks: FC = () => {
  const { search, setTracks } = useContext(SearchContext);

  const { data: fetchData, loading } = useFetch(
    `search?q=${search ? search : "eminem"}`,
    [search]
  );

  const data = fetchData?.data as IMusic[];

  if (loading) {
    return (
      <LoadingContainer>
        <p style={{ fontSize: "2rem" }}>Loading...</p>
      </LoadingContainer>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1c0b47" }}>
      <MusicContainerStyled>
        {data?.map((d) => (
          <MusicCard key={d.id} music={d} />
        ))}
      </MusicContainerStyled>
    </div>
  );
};

export default Tracks;
