import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
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
import LinkButton from "../components/LinkButton";
import Hr from "../components/Hr";
import Config from "../utils/config";
import SocialLink from "../components/SocialLink";
import Link from 'next/link';



const Header = styled.div`
  text-align: center;
  display: block;
  padding: 15px;

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 6px;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

class Index extends React.Component {
  render() {
    const { lang, posts, hasMore, onLoadMore } = this.props;
    return (
      <Page lang={lang}>
        <CustomHead />
        <LogoBanner lang={lang} />
        <Header> 
          <h1>Welcome to the Stem Type™ Navigator</h1>
              <Col xs={12} sm={12} md={12}>
              <Link href="/quiz">
                <a><LinkButton
                  title={"Find Your Stem Type™"}
                />
                </a>
                </Link>
              </Col>
          <h3>STEM Type™ connects your passions and dreams</h3>
          <h3> the right opportunities so that you can find career success! </h3>
        <Hr />
        </Header>
        <div style={{ padding: 20 }}>
        </div>
        <Grid style={{ overflow: "hidden" }}>
          <Row>
            <Col xs={12} sm={12} md={9}>
              <PostsFeed posts={posts} />
            </Col>
            <Col xs={false} sm={false} md={3}>
              <div style={{ paddingLeft: 20 }}>
                <SidebarBlock title="Tags">
                  <TagsCloud tags={getTags(posts)} lang={lang} />
                </SidebarBlock>
              </div>
            </Col>
          </Row>
          {hasMore && (
            <Row>
              <Col xs={12} sm={12} md={9}>
                <LoadMoreButton
                  onClick={onLoadMore}
                  title={"Load more careers"}
                />

              </Col>
            </Row>
          )}
        </Grid>
      </Page>
    );
  }
}

const POSTS_PER_PAGE = 5;

export default LazyPostsFetcher(Index, POSTS_PER_PAGE);
