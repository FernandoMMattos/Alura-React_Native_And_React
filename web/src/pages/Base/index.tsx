//import styles from './PaginaBase.module.scss'

import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";

const PaginaBase = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  );
};

export default PaginaBase;
