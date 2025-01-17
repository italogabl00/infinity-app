import React from "react";
import LogoIN from "../../public/imagens/inblack.png";

const Logo: React.FC = (): JSX.Element => {
  return (
    <img
      src={LogoIN}
      className="z-10 drop-shadow-xl  mt-4 max-w-lg md:max-w-md sm:max-w-4/5 ml-16 sm:ml-0"
      alt="Logo da INFINITY School"
    />
  );
};

export default Logo;
