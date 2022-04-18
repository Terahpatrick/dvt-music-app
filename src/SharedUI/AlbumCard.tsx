import { useFetch } from "hooks/useFetch";
import useWindowDimensions from "hooks/useWindowDimensions";
import { FC } from "react";
import styled from "styled-components";
import {
  device,
  isDesktop,
  isLaptop,
  isMobile,
  isTablet,
} from "utils/breakPoints";
import { IAlbum } from "./MusicCard";

const AlbumCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 10%;
  border-radius: 0.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1rem 0;
  flex-direction: column;

  & img {
    width: 20rem;

    @media ${device.tablet} {
    }
  }

  & .infoWrapper {
    padding: 0.5rem;
  }
`;

const AlbumContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${(props) => props.theme.secondary};
  justify-content: space-around;
`;

const AlbumCard: FC<{ album: IAlbum }> = ({ album }) => {
  const { title, release_date } = album;

  const { width: fetchWidth } = useWindowDimensions();
  const width = fetchWidth as number;

  const coverImg = isDesktop(width)
    ? album.cover_xl
    : isLaptop(width)
    ? album.cover_big
    : isTablet(width)
    ? album.cover_medium
    : isMobile(width)
    ? album.cover_medium
    : album.cover;

  return (
    <AlbumCardStyle>
      <img src={coverImg} alt={title} />
      <div className="infoWrapper">
        <p>
          <b>{title}</b>
        </p>
        <p>{release_date}</p>
      </div>
    </AlbumCardStyle>
  );
};

const AlbumContainer: FC<{ artistId: number }> = ({ artistId }) => {
  const { data } = useFetch(`artist/${artistId}/albums`, []);
  const albums = data?.data as IAlbum[];

  return (
    <AlbumContainerStyled>
      {albums?.map((album, i) => (
        <AlbumCard album={album} key={i} />
      ))}
    </AlbumContainerStyled>
  );
};

export default AlbumContainer;
