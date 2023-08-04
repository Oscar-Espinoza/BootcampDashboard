import {
  CenteredTitle,
  Container,
  DevelopersList,
  Developer,
  ContainerModal,
} from "./styles";

type MetricsInfoProps = {
  title: string
}

const MetricsInfo = ({ title }: MetricsInfoProps) => {
  return (
    <ContainerModal>
      <CenteredTitle>{title}</CenteredTitle>
      <Container>
        <DevelopersList>
          <Developer>Caterina Aracil</Developer>
          <Developer>Federico Leiva</Developer>
          <Developer>Eric Lich</Developer>
          <Developer>Caterina Aracil</Developer>
          <Developer>Federico Leiva</Developer>
          <Developer>Eric Lich</Developer>
          <Developer>Caterina Aracil</Developer>
          <Developer>Federico Leiva</Developer>
          <Developer>Eric Lich</Developer>
          <Developer>Caterina Aracil</Developer>
          <Developer>Federico Leiva</Developer>
          <Developer>Eric Lich</Developer>
          <Developer>Caterina Aracil</Developer>
          <Developer>Federico Leiva</Developer>
          <Developer>Eric Lich</Developer>
        </DevelopersList>
      </Container>
    </ContainerModal>
  );
};

export default MetricsInfo;
