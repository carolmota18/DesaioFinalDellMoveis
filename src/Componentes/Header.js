import React from "react";
import styled from "styled-components";
import Logo from "../Imagens/logodellmovies.png";
import Pesquisa from "../Imagens/pesquisa.png";

const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  li {
    font-family: "Open Sans", sans-serif;
  }
`;

const ListaUm = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

const Icone = styled.img`
  display: flex;
  justify-content: flex-end;
`;

const ListaDois = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  list-style: none;
`;

export default function Header() {
  return (
    <Conteiner>
      <Icone src={Logo} alt="logo" />
      <ListaUm>
        <li>Séries</li>
        <li>Filmes</li>
      </ListaUm>
      <img src={Pesquisa} alt="pesquisa" />
      <ListaDois>
        <li>Filtro</li>
        <li>Login</li>
      </ListaDois>
    </Conteiner>
  );
}
