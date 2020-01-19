import React from "react";

import { getSiteUrl, getSiteName, getPublicUrl } from "helpers/EnvHelper";
import { getCurrentYear } from "helpers/DateTimeHelper";

const Footer = () => (
  <div className="section footer">
    <div className="container">
      <a href={getSiteUrl()} className="footer-logo" target="_blank" rel="noopener noreferrer">
        <img src={`${getPublicUrl()}/images/random-logo.png`} alt={getSiteName()} />
      </a>
      <div>
        <span className="copyright-title">
          2009 - {getCurrentYear()} - <a href={getSiteUrl()}>{getSiteName()}</a> - Duis laoreet laoreet sollicitudin.
        </span>
        <span className="copyright">Mauris convallis placerat urna vitae lacinia. Phasellus non nulla tempor.</span>
      </div>
    </div>
  </div>
);

export default Footer;
