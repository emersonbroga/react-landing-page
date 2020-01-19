import React from "react";

import { getPublicUrl } from "helpers/EnvHelper";

const Video = () => {
  const style = { backgroundImage: `url(${getPublicUrl()}/images/random-bg.png)` };
  return (
    <div className="section video" style={style}>
      <div className="container">
        <h1>
          Lorem ipsum consectetur <em>adipiscing elit.</em>
        </h1>
        <div className="video">
          <iframe src="https://www.youtube.com/embed/lepYkDZ62OY" frameBorder="0" title="video" />
        </div>
      </div>
    </div>
  );
};

export default Video;
