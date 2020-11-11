import React from "react";
import styled, { keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  width: 40rem;
  height: 35rem;
  @media only screen and (max-width: 1340px) {
    height: unset;
  }
  display: flex;
  flex-direction: column;
  background-color: var(--elements);
  box-shadow: 10px 10px 37px -3px var(--boxShadowColor);
  animation: ${fadeIn} 0.6s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;

  margin: 1rem;
  border-radius: 0.5rem;
  opacity: 0;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  a {
    text-decoration: none;
  }

  :hover {
    transform: scale(0.98);
    box-shadow: 6px 6px 23px -3px var(--boxShadowColor);
  }
`;

const ImageContainer = styled.div`
  height: 20 rem;
  width: 100%;
  display: flex;
  flex-shrink: 3;
  border-radius: 0.5rem 0.5rem 0 0;

  span {
    width: 100%;
  }

  img {
    height: 20rem;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    object-position: center center;
    object-fit: cover;
  }
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
`;

const Excerpt = styled.p``;

function ArticleCard({ articleUrl, title, excerpt, thumbUrl, date }) {
  return (
    <>
      <CardContainer>
        <a target="blank" href={articleUrl} tr>
          <ImageContainer>
            <LazyLoadImage effect="blur" src={thumbUrl} />
          </ImageContainer>

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
