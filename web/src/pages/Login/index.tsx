import React, { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import styled from "styled-components";
import Botao from "../../components/Botao";
import { Link, useNavigate } from "react-router-dom";

import logo from "./assets/logo.png";
import usePost from "../../services/usePost";
import autenticaStore from "../../stores/autenticaStore.store";

const Imagem = styled.img`
  padding: 2em 0;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro);
`;

const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;

const LinkCustom = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
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

interface ILogin {
  email: string;
  senha: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { cadastrarDados, erro, sucesso, resposta } = usePost();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuario: ILogin = {
      email,
      senha,
    };

    try {
      cadastrarDados({ url: "auth/login", dados: usuario });
      autenticaStore.login({ email, token: resposta });
      resposta && navigate("/dashboard");
    } catch (erro) {
      erro && alert("Não foi possível fazer login");
    }
  };

  return (
    <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Formulario onSubmit={handleLogin}>
        <CampoDigitacao
          valor={email}
          tipo="email"
          placeholder="Insira seu endereco de e-mail"
          onChange={setEmail}
          label="E-mail"
        />
        <CampoDigitacao
          valor={senha}
          tipo="password"
          placeholder="Insira sua senha"
          onChange={setSenha}
          label="Senha"
        />
        <BotaoCustom type="submit">Entrar</BotaoCustom>
      </Formulario>
      <Paragrafo>Esqueceu sua senha?</Paragrafo>
      <ParagrafoCadastro>
        Ainda não tem conta?
        <LinkCustom to="/cadastro">Faça seu cadastro!</LinkCustom>
      </ParagrafoCadastro>
    </>
  );
};

export default Login;
