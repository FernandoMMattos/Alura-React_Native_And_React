import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Switch,
} from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import Botao from "../../../components/Botao";
import React, { useState } from "react";
import CampoDigitacao from "../../../components/CampoDigitacao";
import Subtitulo from "../../../components/Subtitulo";
import IProfissional from "../../../types/IProfissional";
import usePost from "../../../services/usePost";
import autenticaStore from "../../../stores/autenticaStore.store";

const BoxStyled = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 1em 5em;
`;

const Container = styled.div`
  text-align: left;
`;

const ContainerSwitch = styled.div`
  text-align: center;
`;

const TextoSwitch = styled.p`
  color: var(--cinza);
`;

const BotaoStyled = styled(Botao)`
  width: 50%;
  display: block;
  margin: 0 auto;
`;

const ContainerEndereco = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0;
`;

const ModalCadastro = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVerificada, setSenhaVerificada] = useState("");
  const [possuiPlano, setPossuiPlano] = useState(false);
  const [imagem, setImagem] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [crm, setCrm] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone, setTelefone] = useState("");
  const label = { inputProps: { "aria-label": "Atende por plano?" } };
  const { cadastrarDados } = usePost();
  const { usuario } = autenticaStore;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.value;
    if (e.target.checked) {
      setPlanosSelecionados([...planosSelecionados, checkboxValue]);
    } else {
      setPlanosSelecionados(
        planosSelecionados.filter((plano) => plano !== checkboxValue)
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const profissional: IProfissional = {
      nome,
      crm,
      especialidade,
      possuiPlanoSaude: possuiPlano,
      estaAtivo: true,
      imagem,
      email,
      telefone,
      senha,
      planoSaude: planosSelecionados,
      endereco: {
        cep,
        rua,
        estado,
        numero,
        complemento,
      },
    };

    await cadastrarDados({
      url: "especialista",
      dados: profissional,
      token: usuario.token,
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal de cadastro do especialista"
        aria-describedby="Nesse modal tera os dados de cadastro do especialista"
      >
        <BoxStyled>
          <Titulo>Cadastre o especialista insetindo os dados abaixo</Titulo>
          <form onSubmit={handleSubmit}>
            <Container>
              <CampoDigitacao
                tipo="text"
                label="Nome"
                valor={nome}
                placeholder="Digite seu nome completo"
                onChange={setNome}
              />
              <CampoDigitacao
                tipo="email"
                label="E-mail"
                valor={email}
                placeholder="Digite o seu e-mail"
                onChange={setEmail}
              />
              <CampoDigitacao
                tipo="password"
                label="Senha"
                valor={senha}
                placeholder="Digite sua senha"
                onChange={setSenha}
              />
              <CampoDigitacao
                tipo="password"
                label="Repita a senha"
                valor={senhaVerificada}
                placeholder="Digite sua senha novamente"
                onChange={setSenhaVerificada}
              />
              <CampoDigitacao
                tipo="text"
                label="Especialidade"
                valor={especialidade}
                placeholder="Qual sua especialidade?"
                onChange={setEspecialidade}
              />
              <CampoDigitacao
                tipo="number"
                label="CRM"
                valor={crm}
                placeholder="Insira seu numero de registro"
                onChange={setCrm}
              />
              <CampoDigitacao
                tipo="tel"
                label="Telefone"
                valor={telefone}
                placeholder="(DDD) 9XXXX-XXXX"
                onChange={setTelefone}
              />
              <CampoDigitacao
                tipo="text"
                label="Insira a URL da sua imagem"
                valor={imagem}
                placeholder="https://img.com/sua-foto"
                onChange={setImagem}
              />
              <CampoDigitacao
                tipo="number"
                label="Endereço"
                valor={cep}
                placeholder="Insira o CEP"
                onChange={setCep}
              />
              <ContainerEndereco>
                <CampoDigitacao
                  tipo="text"
                  valor={rua}
                  placeholder="Rua"
                  onChange={setRua}
                />
                <CampoDigitacao
                  tipo="number"
                  valor={numero}
                  placeholder="Número"
                  onChange={setNumero}
                />
                <CampoDigitacao
                  tipo="text"
                  valor={complemento}
                  placeholder="Complemento"
                  onChange={setComplemento}
                />
                <CampoDigitacao
                  tipo="text"
                  valor={estado}
                  placeholder="Estado"
                  onChange={setEstado}
                />
              </ContainerEndereco>
            </Container>

            <ContainerSwitch>
              <Subtitulo>Atende por plano?</Subtitulo>
              <Switch
                {...label}
                onChange={() => {
                  possuiPlano ? setPossuiPlano(false) : setPossuiPlano(true);
                }}
              />
              <TextoSwitch>Não/Sim</TextoSwitch>
            </ContainerSwitch>
            {possuiPlano ? (
              <>
                <Subtitulo>Selecione os planos:</Subtitulo>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleChange} value="Sulamerica" />
                    }
                    label="Sulamerica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleChange} value="Unimed" />
                    }
                    label="Unimed"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleChange} value="Bradesco" />
                    }
                    label="Bradesco"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} value="Amil" />}
                    label="Amil"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleChange} value="Biosaúde" />
                    }
                    label="Biosaúde"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleChange} value="Biovida" />
                    }
                    label="Biovida"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} value="Outro" />}
                    label="Outro"
                  />
                </FormGroup>
              </>
            ) : (
              ""
            )}
            <BotaoStyled>Cadastrar</BotaoStyled>
          </form>
        </BoxStyled>
      </Modal>
    </>
  );
};

export default ModalCadastro;
