import { StaticImageData } from "next/image";
import styled from "styled-components";

interface BackgroundProps {
  image: StaticImageData
}

export const Background = styled.div<BackgroundProps>`
  min-height: 100vh;
  width: 100%;

  background-color: #212121;
  background-image: ${(props) => `url(${props.image.src})`};
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    padding: 16px;
  }
` 

export const Logo = styled.img`
  width: 200px;
` 

export const ParagraphWrapper = styled.div`
  max-width: 800px;
  margin: 32px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Paragraph = styled.p`
  text-align: center;
`

export const Emphasis = styled.span`
  font-weight: 700;
  color: #A1BE54;
`

export const Schedule = styled.strong`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 32px;
  text-align: center;
`

export const Address = styled.p`
  font-size: 14px;
`
