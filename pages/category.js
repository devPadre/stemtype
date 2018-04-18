import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Page from "../components/Page";
import CustomHead from "../components/CustomHead";
import LogoBanner from "../components/LogoBanner";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import TagsCloud from "../components/Sidebar/TagsCloud";
import { postsByCategory, getTags } from "../utils/content";
import { getCategoryLink } from "../utils/links";
import PostsFeed from "../components/PostsFeed";
import NextError from "next/error";
import PostCategory from "../components/Post/PostCategory";
import LanguageSelector from "../components/LanguageSelector";
import LazyPostsFetcher from "./_hocs/LazyPostsFetcher";
import Hr from "../components/Hr";
import Layout from '../components/layout';
import Config from "../utils/config";

const Header = styled.div`
  text-align: center;
  display: block;

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 40px;
    text-transform: uppercase;
  }
`;

class CategoryPage extends React.Component {
  render() {
    const { category } = this.props.url.query;
    const { lang } = this.props;
    if (!(category && Config.categories[category])) {
      return <NextError statusCode={404} />;
    }
    const posts = postsByCategory(this.props.posts, category);
    return (
      <Layout>  
        <Page lang={lang}>
          <CustomHead />
          <LogoBanner lang={lang} />
          <Grid style={{ overflow: "hidden" }}>
            <Row>
              <Col xs={12}>
              <Header>
              <PostCategory
                category={category}
                categoryInfo={Config.categories[category]}
              />
              <div style={{ padding: 20 }}>
              </div>
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

export default LazyPostsFetcher(CategoryPage);
