import { useFetch } from "hooks/useFetch";
import { FC } from "react";
import { useParams } from "react-router-dom";
import AlbumContainer from "SharedUI/AlbumCard";
import AlbumInfo from "SharedUI/AlbumInfo";
import { IArtist, IMusic } from "SharedUI/MusicCard";
import TopTracks from "SharedUI/TopTracks";
import styled from "styled-components";
import { device } from "utils/breakPoints";
import { LoadingContainer } from "./Tracks";

const AlbumStyled = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OtherAlbums = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    color: ${(props) => props.theme.secondary};
    margin: 1rem 0;
  }
`;

interface tracksData {
  data: IMusic[];
}

export interface IGlobalAlbum {
  title: string;
  label: string;
  release_date: string;
  fans: number;
  artist: IArtist;
  tracks: tracksData;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
}

const Album: FC = () => {
  const params = useParams();
  const albumId = params?.albumId;

  const { data: fetchData, loading } = useFetch(`album/${albumId}`, []);
  const data = fetchData as IGlobalAlbum;


  if (loading) {
    return (
      <LoadingContainer>
        <p style={{ fontSize: "2rem" }}>Loading...</p>
      </LoadingContainer>
    );
  }

  return (
    <AlbumWrapper>
      <AlbumStyled>
        <AlbumInfo info={data} />
        <TopTracks artistId={data?.artist?.id} />
      </AlbumStyled>
      <OtherAlbums>
        <h2>Albums</h2>
        <AlbumContainer artistId={data?.artist?.id} />
      </OtherAlbums>
    </AlbumWrapper>
  );
};

export default Album;
