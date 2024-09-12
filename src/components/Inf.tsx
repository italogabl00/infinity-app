import React from "react";
import Infinity from "../../public/imagens/logo.png";
import { Link } from "react-router-dom";

const In: React.FC = (): JSX.Element => {
  return (
    <Link to="/" className="">
      <button className="uppercase">
        <img src={Infinity} className="mt-16 h-36" alt="Voltar para o Início" />
      </button>
    </Link>
  );
};

export default In;
