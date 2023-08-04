import React from "react";

import {
  CardsContainer,
  Container,
  Description,
  PrincipalTitle,
  SubCategory,
  Subtitle,
} from "./style";
import CardTeam from "../CardTeam";

const AboutUs = () => (
  <Container>
    <PrincipalTitle>About Us</PrincipalTitle>
    <Subtitle>
      ¿Lorem ipsum dolor sit amet consectetur adipisicing elit?
    </Subtitle>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      doloribus? Sit nostrum cum labore quod maiores placeat sunt? Esse fugiat
      saepe quod commodi nisi mollitia nemo similique labore id nihil.
    </Description>

    <Subtitle>
      ¿Lorem ipsum dolor sit amet consectetur adipisicing elit?
    </Subtitle>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      doloribus? Sit nostrum cum labore quod maiores placeat sunt? Esse fugiat
      saepe quod commodi nisi mollitia nemo similique labore id nihil.
    </Description>

    <Subtitle>
      ¿Lorem ipsum dolor sit amet consectetur adipisicing elit?
    </Subtitle>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      doloribus? Sit nostrum cum labore quod maiores placeat sunt? Esse fugiat
      saepe quod commodi nisi mollitia nemo similique labore id nihil.
    </Description>
    <SubCategory>Team</SubCategory>
    <CardsContainer>
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Alejo Viotti"
        description="COO"
        subtitle="alejo@gmail.com"
      />
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Javier Olivieri"
        subtitle="javi@gmail.com"
        description="CEO"
      />
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Alain"
        subtitle="alain@gmail.com"
        description="CMO"
      />
    </CardsContainer>
    <CardsContainer>
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
        description="FULL STACK DEVELOPER"
      />
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
        description="FULL STACK DEVELOPER"
      />
      <CardTeam
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
        description="FULL STACK DEVELOPER"
      />
    </CardsContainer>
  </Container>
);

export default AboutUs;
