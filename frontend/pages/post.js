import Layout from '../components/Layout.js';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import PageWrapper from '../components/PageWrapper.js';
import {Config} from '../config.js';
import {Image} from '../utilities';
import MetaData from '../components/MetaData.js';
class Post extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const post = await res.json();
    return {post};
  }

  render() {
    const {post} = this.props;
    if (!post.title) return <Error statusCode={404} />;

    return (
      <Layout {...this.props}>
        <section className="page_container post">
          <h1>{post.title.rendered}</h1>
          <div className="content_wrapper">
            <Image
              image={post.acf.image}
              alt="Custom Post Types using Reast Api and React"
              className="blog_image"
            />
            <MetaData date={post.date} id={post.id} />
            <div className="post_content">
              <p>{post.content.rendered}</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
