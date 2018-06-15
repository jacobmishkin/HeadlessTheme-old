import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import {Image} from '../utilities';
import PageWrapper from '../components/PageWrapper.js';
import {Config} from '../config.js';

class Project extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const projectRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const project = await projectRes.json();
    return {project};
  }

  render() {
    const {project} = this.props;
    return (
      <Layout {...this.props}>
          <h2>{project.title.rendered}</h2>
          <Image image={project.acf.image} className="project_image" />
          <p>{project.content.rendered}</p>
      </Layout>

    );
  }
}
export default PageWrapper(Project);
