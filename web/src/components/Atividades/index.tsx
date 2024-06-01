import escudo from "./assets/escudo.png";
import calendario from "./assets/calendario.png";
import like from "./assets/like.png";
import sino from "./assets/sino.png";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 60%;
`;

const Bloco = styled.div`
  width: 20%;
  background-color: var(--cinza-claro);
  padding: 16px 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const Texto = styled.p`
  line-height: 19px;
  color: var(--azul-escuro);
`;

const Atividades = () => {
  return (
    <Container>
      <Bloco>
        <img src={escudo} alt="Escdo" />
        <Texto>Encontre Especialistas</Texto>
      </Bloco>
      <Bloco>
        <img src={calendario} alt="Calendario" />
        <Texto>Agende consultas</Texto>
      </Bloco>
      <Bloco>
        <img src={sino} alt="Sino" />
        <Texto>Defina lembretes</Texto>
      </Bloco>
      <Bloco>
        <img src={like} alt="Avaliacao" />
        <Texto>Avalie o servico</Texto>
      </Bloco>
    </Container>
  );
};

export default Atividades;
