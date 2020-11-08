import React from "react";
import styled, { keyframes } from "styled-components";

const CardContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  background-color: var(--elements);
  box-shadow: 10px 10px 37px -3px var(--boxShadowColor);
  margin: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  a {
    text-decoration: none;
  }

  :hover {
    transform: scale(0.98);
    box-shadow: 6px 6px 23px -3px var(--boxShadowColor);
  }
`;

const ImageContainer = styled.div.attrs((props) => ({
  thumbUrl: props.thumbUrl,
}))`
  background-image: url(${(props) => props.thumbUrl});
  height: 20rem;
  width: 100%;
  display: flex;
  flex-shrink: 3;
  background-position: center center;
  background-size: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const TextContainer = styled.div`
  color: var(--textNormal);
  padding: 2rem;
  @media only screen and (max-width: 425px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: var(--textTitle);
  margin-top: 0;
`;

const Date = styled.p`
  text-align: right;
  /* color: #9e1c1c; */
`;

const Excerpt = styled.p``;

function ArticleCard({ articleUrl, title, excerpt, thumbUrl, date }) {
  return (
    <>
      <CardContainer>
        <a target="blank" href={articleUrl}>
          <ImageContainer thumbUrl={thumbUrl} />
          <TextContainer>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
            <Date>{date}</Date>
          </TextContainer>
        </a>
      </CardContainer>
    </>
  );
}

export default ArticleCard;
