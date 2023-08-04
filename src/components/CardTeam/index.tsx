import React from "react";

import { CardContainer, Description, Image, Subtitle, Title } from "./styles";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const CardTeam: React.FC<CardProps> = ({ imageSrc, title, subtitle, description }) => (
  <CardContainer>
    <Image src={imageSrc} alt={`${title} Card Image`} />
    <Title>{title}</Title>
     <Subtitle>{description}</Subtitle>
    <Description>{subtitle}</Description>
   

  </CardContainer>
);

export default CardTeam;