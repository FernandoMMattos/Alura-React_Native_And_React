import styled from "styled-components";

interface Props {
  tipo: string;
  placeholder: string;
  valor: string;
  label?: string;
  onChange: (value: string) => void;
}

const InputStyled = styled.input`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;
`;

const LabelStyled = styled.label`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro);
`;

const Container = styled.div`
  width: 100%;
`;

const CampoDigitacao = ({
  tipo,
  placeholder,
  onChange,
  valor,
  label,
}: Props) => {
  return (
    <Container>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
};

export default CampoDigitacao;
