import React from "react";
import styled from "styled-components";
import Logo from "../Imagens/logodellmovies.png";
import Pesquisa from "../Imagens/pesquisa.png";

const Conteiner = styled.div`
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;

export default function Header() {
  return (
    <Conteiner>
      <img src={Logo} alt="logo" />
      <ul>
        <li>Séries</li>
        <li>Filmes</li>
      </ul>
      <img src={Pesquisa} alt="pesquisa" />
      <ul>
        <li>Filtro</li>
        <li>Login</li>
      </ul>
    </Conteiner>
  );
}
