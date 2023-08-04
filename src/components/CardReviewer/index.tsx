import React from "react";

import { CardContainer, Image, Subtitle, Title } from "./styles";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle }) => (
  <CardContainer>
    <Image src={imageSrc} alt={`${title} Card Image`} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </CardContainer>
);

export default Card;
