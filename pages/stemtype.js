import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Page from "../components/Page";
import CustomHead from "../components/CustomHead";
import LogoBanner from "../components/LogoBanner";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import TagsCloud from "../components/Sidebar/TagsCloud";
import { getTags } from "../utils/content";
import TypesFeed from "../components/TypesFeed";
import LanguageSelector from "../components/LanguageSelector";
import { getIndexLink } from "../utils/links";
import LazyPostsFetcher from "./_hocs/LazyPostsFetcher";
import LoadMoreButton from "../components/LoadMoreButton";

import Media from "../utils/media";
import Config from "../utils/config";
import StemBanner from "../components/StemBanner";


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

class StemType extends React.Component {
  render() {
    const { lang, posts, hasMore, onLoadMore, image, imageWidth, imageHeight } = this.props;
    const authorInfo = Config.authors[stemjobs];
    const stemjobs = Config.authors[stemjobs];

    return (
      <Page lang={lang}>
        <CustomHead />
          <LogoBanner lang={lang} />
        <Grid style={{ overflow: "hidden" }}>
          <Row>
            <Col xs={12} lg={10} lgOffset={1} style={{ padding: 0 }}>
            <StemBanner />
            <Header style={{ paddingbottom: 20 }}>  
            <h2>Explore Jobs Connected with each STEM Type</h2>
            <div style={{ paddingBottom: "5%" }} />
            </Header>
              </Col>
            <Col xs={12}>
              
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} style={{ paddingbottom: 40 }}>
              <TypesFeed posts={posts} featured={false} />
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
}

const POSTS_PER_PAGE = 8;

export default LazyPostsFetcher(StemType, POSTS_PER_PAGE);
