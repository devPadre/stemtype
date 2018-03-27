import React from "react";
import styled from "styled-components";
import Config from "../utils/config";
import HrStem from "../components/HrStem";
import { Link } from "../utils/routes";

const LogoBannerContainer = styled.div`
  width: 100%;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: block;
  position: relative;
  width: 30%;
  max-width: 340px;
  padding-top: 120px;
  padding-bottom: 10px;
  margin: 0 auto;

  @media screen and (max-width: ${props =>
      props.theme.flexboxgrid.breakpoints.sm + "em"}) {
    width: 70%;
  }

  @media screen and (min-width: ${props =>
      props.theme.flexboxgrid.breakpoints.sm + "em"}) and (max-width: ${props =>
      props.theme.flexboxgrid.breakpoints.md + "em"}) {
    width: 50%;
  }
`;

const LogoImage = styled.img.attrs({
  src: "/assets/stem.png",
  srcSet: "/assets/stem@2x.png 2x",
  width: "100%",
  alt: `${Config.siteTitle} logo`
})`
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: auto;
`;

export default ({ lang }) => (
  <LogoBannerContainer>
        <HrStem />
  </LogoBannerContainer>
);
