import React from "react";
import styled from "styled-components";
import { clearFix } from "polished";

const Container = styled.div`
  ${clearFix()};
`;

const Hr = styled.hr`
  position: relative;
  margin: 50px 0px;
  border: none;
  height: .1rem;
  background: rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    display: inline-block;
    background: url(/assets/stem.svg) 5px center no-repeat;
    width: 20rem;
    height: 3.8rem;
    background-size: 20rem;
    position: absolute;
    left: 0;
    right: 0;
    top: -1.9rem;
    margin: auto;
    background-color: #ffffff;
  }
`;

export default () => (
  <div>
    <Container />
    <Hr />
  </div>
);
