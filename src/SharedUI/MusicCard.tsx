import useWindowDimensions from "hooks/useWindowDimensions";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  device,
  isDesktop,
  isLaptop,
  isMobile,
  isTablet,
  size,
} from "utils/breakPoints";
import { getMinutesDuration } from "utils/helpers";

const MusicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 10%;
  border-radius: 0rem 0rem 0.4rem 0.4rem;
  margin: 1rem 0;
  /* border: 2px solid gray;   */
  /* box-shadow: 2px 2px 2px 1px white; */
  box-shadow: ${(props) => props.theme.secondary} 0px 10px 36px 0px,
    ${(props) => props.theme.secondary} 0px 0px 0px 1px;
  cursor: pointer;

  @media ${device.tablet} {
    margin: 1rem;
  }

  & img {
    border-bottom: 2px solid gray;
    width: 20rem;

    @media ${device.mobileL} {
      width: 100%;
      min-width: 96vw;
    }
  }

  & .infoWrapper {
    padding: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.tablet} {
      flex-direction: column-reverse;
    }

    & > * {
      margin-block: 0 !important;
    }

    & .right {
      margin-left: 1rem;
      @media ${device.tablet} {
        margin-left: 0rem;
      }
    }
  }

  .track {
    font-size: 1.2rem;
  }
`;

export interface IArtist {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
}

export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  release_date: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
}

export interface IMusic {
  id: number;
  title: string;
  duration: number;
  md5_image: string;
  artist: IArtist;
  album: IAlbum;
}

interface IProps {
  music: IMusic;
}

const MusicCard: FC<IProps> = ({ music }) => {
  const { title, duration, artist, album } = music;

  const navigate = useNavigate();
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth as number;

  const coverImg = isDesktop(width)
    ? album.cover_xl
    : isLaptop(width)
    ? album.cover_big
    : isTablet(width)
    ? album.cover_medium
    : isMobile(width)
    ? album.cover_medium
    : album.cover;

  const handleNavigate = (albumId: number) => navigate(`/${albumId}`);

  const time = getMinutesDuration(duration);

  return (
    <MusicCardContainer onClick={() => handleNavigate(album.id)}>
      <img src={coverImg} alt={title} />
      <div className="infoWrapper">
        <div className="left">
          <p className="track">{title}</p>
          <p className="artist">{artist.name}</p>
          {width > +size.tablet && (
            <p className="album" style={{ marginTop: "1rem !important" }}>
              {album.title}
            </p>
          )}
        </div>
        <div className="right">
          <p className="duration">{time}</p>
        </div>
      </div>
    </MusicCardContainer>
  );
};

export default MusicCard;
