import { IGlobalAlbum } from "components/Album";
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
import { readableNumbers } from "utils/helpers";

const AlbumInfoStyled = styled.div`
  position: relative;
  text-align: center;
  color: white;

  & img {
    @media ${device.tablet} {
      width: 100%;
    }
  }

  .infoWrapper {
    position: absolute;
    top: 30%;
    left: 20%;
    color: ${(props) => props.theme.secondary};

    @media ${device.tablet} {
      top: 100%;
      color: white;
      left: 2%;
    }

    h2 {
      font-size: 2rem;
      margin-block: 0.4rem;
    }

    & p {
      border-bottom: 4px solid ${(props) => props.theme.secondary};
      padding-bottom: 1rem !important;
    }
  }
`;

const AlbumInfo: FC<{ info: IGlobalAlbum }> = ({ info }) => {
  const { width: fetchWidth } = useWindowDimensions();
  const width = fetchWidth as number;

  const coverImg = isDesktop(width)
    ? info?.cover_xl
    : isLaptop(width)
    ? info?.cover_big
    : isTablet(width)
    ? info?.cover_medium
    : isMobile(width)
    ? info?.cover_medium
    : info?.cover;

  return (
    <AlbumInfoStyled>
      <img src={coverImg} alt="Snow" />
      <div className="infoWrapper">
        <h2>{info?.artist.name}</h2>
        <p>{readableNumbers(info?.fans | 0)} Fans</p>
      </div>
    </AlbumInfoStyled>
  );
};

export default AlbumInfo;
