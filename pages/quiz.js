import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Page from "../components/Page";
import CustomHead from "../components/CustomHead";
import LogoBanner from "../components/LogoBanner";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import TagsCloud from "../components/Sidebar/TagsCloud";
import { getTags } from "../utils/content";
import PostsFeed from "../components/PostsFeed";
import LanguageSelector from "../components/LanguageSelector";
import { getIndexLink } from "../utils/links";
import LazyPostsFetcher from "./_hocs/LazyPostsFetcher";
import LoadMoreButton from "../components/LoadMoreButton";
import QuizEmbed from "../components/QuizEmbed";

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

class Quiz extends React.Component {
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
            <Header style={{ paddingbottom: "5px" }}>  
            <h2>Welcome to the STEM Type Quiz!</h2>
            <div style={{ paddingBottom: "5px" }} />
            </Header>
              </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <QuizEmbed />
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
}

const POSTS_PER_PAGE = 5;

export default LazyPostsFetcher(Quiz, POSTS_PER_PAGE);
