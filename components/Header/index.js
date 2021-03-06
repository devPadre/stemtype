import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { Link } from "../../utils/routes";
import SocialLink from "../SocialLink";
import LogoLink from "../LogoLink";
import Media from "../../utils/media";
import Icons from "../Icons";
import Config from "../../utils/config";

const HeaderContainer = styled.div`
  min-height: 48px;
  width: 100%;
  background-color: ${props => props.theme.colors.black};
`;

const ToggleMenuIcon = styled.div`
  color: ${props => props.theme.colors.inversedText};
  font-size: 24px;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  display: none;

  ${Media.md`display: inline-block;`};
`;

const Navigation = styled.nav.attrs({
  role: "navigation"
})`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
  }

  li {
    display: inline-block;
    margin-right: 30px;
    position: relative;
    list-style: none;
  }

  a {
    color: ${props => props.theme.colors.inversedLink};
    font-weight: 400;
    transition: 0.25s;
    text-decoration: none;
    cursor: pointer;
    font-size: 11px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;
  }

  a:hover,
  a:focus {
    color: ${props => props.theme.colors.inversedLinkHover};
  }

  ${Media.md`display: none;`};
`;

const NavigationMenu = ({ lang }) => (
  <ul>
    {Config.menu.map(({ text, route, params }, index) => (
      <li key={`menu-${index}`}>
        <Link route={route} params={{ ...params, lang }}>
          <a>{text}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const HeaderRoot = ({ children }) => (
  <header>
    <HeaderContainer>{children}</HeaderContainer>
  </header>
);

const HeaderSocialLink = SocialLink.extend`
  font-size: ${props => props.size || "20px"}};
  padding: 14px 0;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderLogoLink = LogoLink.extend`
  padding: 16px 0;
  margin-right: 0px;
`;

export default ({ onToggleMobileNavigation, lang }) => (
  <HeaderRoot>
    <Grid>
      <Row style={{ margin: 0 }}>

        <Col xs={4} xsOffset={0} sm={4} smOffset={0}>
          <ToggleMenuIcon>
            <Icons.Burger onClick={onToggleMobileNavigation} />
          </ToggleMenuIcon>
          <Navigation>
            <NavigationMenu lang={lang} />
          </Navigation>
        </Col>

        <Col xs={6} sm={6} >
          <HeaderLogoLink href={Config.social.facebook.href}>
          <Icons.StemLogo />
          </HeaderLogoLink>
          </Col>

      </Row>
    </Grid>
  </HeaderRoot>
);
