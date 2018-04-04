import styled from "styled-components";
import { CategoryLink } from "../utils/links";

export default styled(CategoryLink)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.25s ease; 
	-webkit-transition: color 0.25s ease; 
	-moz-transition: color 0.25s ease; 
	-o-transition: color 0.25s ease;
  color: #8BC53F;

  &:hover {
    color: ${props => props.theme.colors.inversedLinkHover};
  }
`;
