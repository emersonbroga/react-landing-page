import React from "react";

import { getSiteUrl, getSiteName, getPublicUrl } from "helpers/EnvHelper";

const About = () => (
  <div className="section about">
    <div className="container">
      <div className="block">
        <div className="role">Duis aute irure.</div>
        <div className="inner">
          <h2>
            Vel <em>efficitur libero</em>
          </h2>
          <div className="info">
            <div>
              <p>
                <em>Duis aute irure.</em>, Nullam tempor quam est, nec iaculis <i>quam sodales in</i>. Morbi id nunc
                dui. Maecenas magna elit, ultrices et <i>porttitor commodo</i>, dictum ut risus. Nullam auctor mi diam,
                posuere iaculis enim varius in. Phasellus a condimentum odio, sed lacinia orci
                <a href={getSiteUrl()} target="_blank" rel="noopener noreferrer">
                  {getSiteName()}
                </a>
                .
              </p>
            </div>
            <div className="photo">
              <img src={`${getPublicUrl()}/images/random-dude.png`} alt={getSiteName()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
