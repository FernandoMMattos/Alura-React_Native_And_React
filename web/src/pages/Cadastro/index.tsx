import styled from "styled-components";
import logo from "./assets/logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import Botao from "../../components/Botao";
import { useNavigate } from "react-router-dom";
import CampoDigitacao from "../../components/CampoDigitacao";
import IClinica from "../../types/IClinica";
import usePost from "../../services/usePost";

interface PropsCustom {
  cor: string;
}

const Imagem = styled.img`
  padding: 2em 0;
`;

const StepStyled = styled.div<PropsCustom>`
  background-color: ${({ cor }) => cor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustom = styled(Botao)`
  width: 50%;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
`;

const Cadastro = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [senhaVerificada, setSenhaVerificada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const { cadastrarDados, erro, sucesso } = usePost();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clinica: IClinica = {
      email,
      nome,
      senha,
      endereco: {
        cep,
        rua,
        numero,
        complemento,
        estado,
      },
    };

    if (etapaAtiva !== 0) {
      try {
        cadastrarDados({ url: "clinica", dados: clinica });
        navigate("/login");
      } catch (erro) {
        erro && alert("Erro ao cadastrar os dados");
      }
    }

    setEtapaAtiva(etapaAtiva + 1);
  };

  return (
    <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Stepper activeStep={etapaAtiva}>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepStyled cor={props.active ? "lightblue" : "lightgray"} />
            )}
          />
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepStyled cor={props.active ? "lightblue" : "lightgray"} />
            )}
          />
        </Step>
      </Stepper>

      {etapaAtiva === 0 ? (
        <>
          <Titulo>Primeiro, alguns dados básicos:</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="text"
              label="Nome"
              valor={nome}
              placeholder="Insira seu nome"
              onChange={setNome}
            />
            <CampoDigitacao
              tipo="text"
              label="CNPJ"
              valor={cnpj}
              placeholder="Insira seu CNPJ"
              onChange={setCnpj}
            />
            <CampoDigitacao
              tipo="email"
              label="E-mail"
              valor={email}
              placeholder="Insira o endereço de e-mail para login"
              onChange={setEmail}
            />
            <CampoDigitacao
              tipo="password"
              label="Senha"
              valor={senha}
              placeholder="Insira sua senha"
              onChange={setSenha}
            />
            <CampoDigitacao
              tipo="password"
              label="Confirme a senha"
              valor={senhaVerificada}
              placeholder="Confirme sua senha"
              onChange={setSenhaVerificada}
            />
            <BotaoCustom type="submit">Avançar</BotaoCustom>
          </Formulario>
        </>
      ) : (
        <>
          <Titulo>Agora, os dados técnicos:</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="tel"
              label="Telefone"
              valor={telefone}
              placeholder="(DDD) 9XXXX-XXXX"
              onChange={setTelefone}
            />
            <CampoDigitacao
              tipo="number"
              label="CEP"
              valor={cep}
              placeholder="Insira o CEP"
              onChange={setCep}
            />
            <CampoDigitacao
              tipo="text"
              label="Rua"
              valor={rua}
              placeholder="Insira o nome da rua"
              onChange={setRua}
            />
            <Container>
              <CampoDigitacao
                tipo="number"
                valor={numero}
                placeholder="Insira o número"
                onChange={setNumero}
              />
              <CampoDigitacao
                tipo="text"
                valor={complemento}
                placeholder="Insira o complemento"
                onChange={setComplemento}
              />
              <CampoDigitacao
                tipo="text"
                valor={estado}
                placeholder="Insira o estado"
                onChange={setEstado}
              />
            </Container>
            <BotaoCustom type="submit">Cadastrar</BotaoCustom>
          </Formulario>
        </>
      )}
    </>
  );
};

export default Cadastro;
