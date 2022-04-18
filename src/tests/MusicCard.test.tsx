import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MusicCard, { IMusic } from "SharedUI/MusicCard";
import { getMinutesDuration } from "utils/helpers";

const data: IMusic = {
  id: 916424,
  title: "Without Me",
  duration: 290,
  md5_image: "ec3c8ed67427064c70f67e5815b74cef",
  artist: {
    id: 13,
    name: "Eminem",
    picture: "https://api.deezer.com/artist/13/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
  },
  album: {
    id: 103248,
    title: "The Eminem Show",
    cover: "https://api.deezer.com/album/103248/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
    release_date: "",
  },
};

test("Render Title in Track Music Card", () => {
  render(
    <Router>
      <MusicCard music={data} />
    </Router>
  );
  const titleElement = screen.getByText(data.title);
  expect(titleElement).toBeInTheDocument();
});

test("Render artist name in Track Music Card", () => {
  render(
    <Router>
      <MusicCard music={data} />
    </Router>
  );
  const artistNameElement = screen.getByText(data.artist.name);
  expect(artistNameElement).toBeInTheDocument();
});

const time = getMinutesDuration(data.duration);

test("Render duration in Track Music Card", () => {
  render(
    <Router>
      <MusicCard music={data} />
    </Router>
  );
  const durationElement = screen.getByText(time);
  expect(durationElement).toBeInTheDocument();
});
