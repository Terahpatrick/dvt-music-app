import Tracks from "components/Tracks";
import { FC, Fragment } from "react";
import BaseNav from "SharedUI/BaseNav";

const TracksPage: FC = () => {
  return (
    <Fragment>
      <BaseNav />
      <Tracks />
    </Fragment>
  );
};

export default TracksPage;
