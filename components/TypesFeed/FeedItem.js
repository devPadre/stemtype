import React from "react";
import styled from "styled-components";
import { TypeLink } from "../../utils/links";
import TypesLink from "../TypesLink";
import FeedItemImage from "./FeedItemImage";

const FeedItemContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;

const TypesLinkWrapper = styled.div`
  text-align: center;
  left: 0;
  position:absolute;
  top: 45%;
  width: 100%;
`;

function FeedItem(props) {
  return (
    <FeedItemContainer>
      <TypesLinkWrapper>
        <TypesLink category={props.category}>{props.category}</TypesLink>
      </TypesLinkWrapper>
      <TypeLink category={props.category}>
        <FeedItemImage src={props.image} lazy={props.lazy} />
        <span style={{ display: "none" }}>{props.title}</span>
      </TypeLink>
    </FeedItemContainer>
  );
}

export default FeedItem;
