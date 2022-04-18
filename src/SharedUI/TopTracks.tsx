import { useFetch } from "hooks/useFetch";
import { FC } from "react";
import styled from "styled-components";
import { device } from "utils/breakPoints";
import { getMinutesDuration } from "utils/helpers";
import { IMusic } from "./MusicCard";

const TopTracksStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  padding: 0 2rem;
  flex: 1;

  & .title {
    margin: 1rem 0;

    @media ${device.tablet} {
      margin: 0.5rem 0;
    }
  }

  @media ${device.tablet} {
    margin-top: 5rem;
    padding: 0 1rem;
  }
`;

const TrackStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 1rem 0;

  & .left {
    display: flex;
    align-items: center;

    & .index {
      margin-right: 1rem;
    }
  }

  & .right {
    margin-left: 1rem;
  }
`;

const TrackListStyled = styled.div``;

const TopTracks: FC<{ artistId: number }> = ({ artistId }) => {
  const { data } = useFetch(`artist/${artistId}/top?limit=5`, []);
  const tracks = data?.data as IMusic[];

  return (
    <TopTracksStyled>
      <h2 className="title">Top Tracks</h2>

      {tracks?.map((track, i) => (
        <TrackStyled key={track.id}>
          <div className="left">
            <p className="index">
              <b>{i + 1}.</b>
            </p>
            <p>
              <b>{track.title}</b>
            </p>
          </div>
          <p className="right">{getMinutesDuration(track.duration)}</p>
        </TrackStyled>
      ))}
    </TopTracksStyled>
  );
};

export default TopTracks;
