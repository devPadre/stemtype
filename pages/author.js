import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Page from "../components/Page";
import Config from "../utils/config";
import CustomHead from "../components/CustomHead";
import LogoBanner from "../components/LogoBanner";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import TagsCloud from "../components/Sidebar/TagsCloud";
import { postsByAuthor, getTags } from "../utils/content";
import { getAuthorLink } from "../utils/links";
import PostsFeed from "../components/PostsFeed";
import NextError from "next/error";
import PostAuthor from "../components/Post/PostAuthor";
import LanguageSelector from "../components/LanguageSelector";
import LazyPostsFetcher from "./_hocs/LazyPostsFetcher";
import Layout from '../components/layout';

const Header = styled.div`
  text-align: center;
  display: block;
  margin-bottom: 20px;
`;

class AuthorPage extends React.Component {
  render() {
    const { author } = this.props.url.query;
    const { lang, hasMore, onLoadMore } = this.props;
    if (!(author && Config.authors[author])) {
      return <NextError statusCode={404} />;
    }
    const posts = postsByAuthor(this.props.posts, author);
    return (
      <Layout>  
        <Page lang={lang}>
          <CustomHead />
          <LogoBanner lang={lang} />
          <div style={{ padding: 20 }}>
          </div>
          <Grid style={{ overflow: "hidden" }}>
            <Row>
              <Col xs={12}>
                <Header>
                  <PostAuthor
                    author={author}
                    authorInfo={Config.authors[author]}
                  />
                </Header>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={9}>
                <PostsFeed posts={posts} featured={false} />
              </Col>
              <Col xs={false} sm={false} md={3}>
                <div style={{ paddingLeft: 20 }}>
                  <SidebarBlock title="Tags">
                    <TagsCloud tags={getTags(posts)} lang={lang} />
                  </SidebarBlock>
                </div>
              </Col>
            </Row>
          </Grid>
        </Page>
      </Layout>  
    );
  }
}

export default LazyPostsFetcher(AuthorPage);
