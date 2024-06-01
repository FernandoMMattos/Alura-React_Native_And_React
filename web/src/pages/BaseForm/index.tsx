import styled from "styled-components";
import background from "./assets/background.png";
import { Outlet } from "react-router-dom";

const ContainerPrincipal = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginaBaseFormulario = () => {
  return (
    <ContainerPrincipal>
      <Container>
        <Outlet />
      </Container>
    </ContainerPrincipal>
  );
};

export default PaginaBaseFormulario;
