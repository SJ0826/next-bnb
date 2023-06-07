import React from "react";
import { NextPage } from "next";
import { styled } from "styled-components";

const index: NextPage = () => {
  return <Container>hello world</Container>;
};

export default index;

const Container = styled.div`
  font-size: 21px;
  color: gray;
`;
