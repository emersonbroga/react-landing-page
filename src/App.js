import React, { Component } from "react";

import Video from "sections/Video";
import Form from "sections/Form";
import Text from "sections/Text";
import CTA from "sections/CTA";
import About from "sections/About";
import Footer from "sections/Footer";

import { init } from "helpers/InitHelper";

import "./styles.scss";

class App extends Component {
  renderSection(section, index) {
    const sectionKey = `${section.id || section.type}-${index}`;
    switch (section.type) {
      case "video":
        return <Video key={sectionKey} {...section} />;
      case "form":
        return <Form key={sectionKey} {...section} />;
      case "text":
        return <Text key={sectionKey} {...section} />;
      case "cta":
        return <CTA key={sectionKey} {...section} />;
      case "about":
        return <About key={sectionKey} {...section} />;
      case "footer":
        return <Footer key={sectionKey} {...section} />;
      default:
        return null;
    }
  }

  renderSections() {
    const { configs } = this.props;
    if (!configs.sections || !configs.sections.length) return;
    return configs.sections.map(this.renderSection);
  }

  render() {
    const { configs } = this.props;
    console.log(configs);

    return <>{this.renderSections()}</>;
  }
}

export default App;
