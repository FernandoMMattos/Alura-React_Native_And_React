//import styles from './PaginaHome.module.scss'

import styled from "styled-components";
import Atividades from "../../components/Atividades";
import Banner from "../../components/Banner";
import Depoimentos from "../../components/Depoimentos";
import Formulario from "../../components/Pesquisa";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginaHome = () => {
  return (
    <>
      <Banner />
      <Container>
        <Formulario />
        <Atividades />
        <Depoimentos />
      </Container>
    </>
  );
};

export default PaginaHome;
