import React from "react";

import Card from "../CardReviewer";
import {
  CardsContainer,
  Container,
  Description,
  PrincipalTitle,
  SubCategory,
  Subtitle,
} from "./style";

const Bootcamp = () => (
  <Container>
    <PrincipalTitle>Bootcamp</PrincipalTitle>
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
    <Subtitle>
      ¿Lorem ipsum dolor sit amet consectetur adipisicing elit?
    </Subtitle>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      doloribus? Sit nostrum cum labore quod maiores placeat sunt? Esse fugiat
      saepe quod commodi nisi mollitia nemo similique labore id nihil.
    </Description>
    <SubCategory>Our Reviewers</SubCategory>
    <CardsContainer>
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Caterina Aracil"
        subtitle="caterinaaracil@gmail.com"
      />
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Eric Lich"
        subtitle="eric@gmail.com"
      />
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
      />
    </CardsContainer>
    <CardsContainer>
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
      />
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
      />
      <Card
        imageSrc="https://avatars.githubusercontent.com/u/43749708?v=4"
        title="Oscar Espinoza"
        subtitle="oscar@gmail.com"
      />
    </CardsContainer>
  </Container>
);

export default Bootcamp;
