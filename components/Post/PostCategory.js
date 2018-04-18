import React from "react";
import styled from "styled-components";
import Icons from "../Icons/index";
import SocialLink from "../SocialLink";
import Links from "../../utils/links";
import PostCategoryAvatar from "./PostCategoryAvatar";

const CategoryBoxContainer = styled.div`
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CategoryBox = styled.div`
  margin-top: 55px;
  margin-bottom: -5px;
  border-top: 1px solid #ebebeb;
  text-align: center;
  min-height: 150px;
`;

const CategoryInfo = styled.div`
  display: block;
  margin-bottom: 10px;
`;

const CategoryLink = styled(Links.CategoryLink)`
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  font-size: 28px;
  transition: color 0.25s ease;
  &:hover {
    color: ${props => props.theme.colors.inversedLinkHover};
  }
`;

const CategoryDescription = styled.div`
  color: rgba(0, 0, 0, 0.5);
  display: block;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledPostCategoryAvatar = styled(PostCategoryAvatar)`
  margin-top: -60px;
`;

export default ({ category, categoryInfo, className }) => {
  return (
    <CategoryBoxContainer className={className}>
      <CategoryBox>
        <CategoryLink category={category}>
          <StyledPostCategoryAvatar
            alt={categoryInfo.title}
            src={categoryInfo.card.avatar}
            height={70}
            width={70}
          />
        </CategoryLink>
        <CategoryInfo>
          <CategoryLink category={category}>{categoryInfo.title}</CategoryLink>
          {categoryInfo.card.description && (
            <CategoryDescription>{categoryInfo.card.description}</CategoryDescription>
          )}
        </CategoryInfo>
      </CategoryBox>
    </CategoryBoxContainer>
  );
};
