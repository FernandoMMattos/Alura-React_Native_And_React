import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";
import pesquisa from "./assets/search.png";
import autenticaStore from "../../stores/autenticaStore.store";

const CabecalhoStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkStyled = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

const LinkStyledLogout = styled(LinkStyled)`
  font-weight: 400;
  text-decoration: none;
  color: var(--azul-escuro);
`;

const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px 16px;
`;

const InputCustom = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
`;

const SpanCustom = styled.span`
	background-image: url(${pesquisa})
	background-repeat: no-repeat;
	background-position: 10px;
	width: 25px;
	height: 25px;
`;

const BotaoStyled = styled.a`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  text-decoration: none;
`;

function Cabecalho() {
  const handleLogout = () => {
    autenticaStore.logout();
  };
  return (
    <CabecalhoStyled>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        {autenticaStore.estaAutenticado ? (
          <>
            <img src={perfil} alt="imagem de perfil do usuário" />
            <LinkStyled href="/" onClick={handleLogout}>
              Sair
            </LinkStyled>
          </>
        ) : (
          <>
            <LinkStyledLogout href="/sobre">Sobre</LinkStyledLogout>
            <LinkStyledLogout href="/cadastro">Cadastre-se</LinkStyledLogout>
            <ContainerPesquisa>
              <InputCustom type="text" placeholder="Digite sua busca" />
              <SpanCustom />
            </ContainerPesquisa>
            <BotaoStyled href="/login">Entrar</BotaoStyled>
          </>
        )}
      </Container>
    </CabecalhoStyled>
  );
}

export default Cabecalho;
