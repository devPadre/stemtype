import React from "react";
import styled from "styled-components";
import { clearFix } from "polished";

const Hr = styled.hr`
  position: relative;
  margin: auto;
  border: none;
  content: "";
  display: inline-block;
  background: url(../../assets/stem-wt.png) 4rem center no-repeat;
  width: 14rem;
  height: 3rem;
  background-size: 10rem;
  left: 0;
  right: 0;
  margin: auto;
`;

export default () => (
    <Hr />
);