import React, { useEffect } from "react";

import Video from "sections/Video";
import Form from "sections/Form";
import Text from "sections/Text";
import CTA from "sections/CTA";
import About from "sections/About";
import Footer from "sections/Footer";

import { init } from "helpers/InitHelper";

import "./styles.scss";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div>
        <Video videoId="lepYkDZ62OY" />
        <Form />
        <Text />
        <CTA />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
