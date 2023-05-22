import React from "react";
import styled from "styled-components";
import Logo from "../Imagens/logodellmovies.png";
import Pesquisa from "../Imagens/pesquisa.png";

const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  aling-items: center;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  li {
    font-family: "Open Sans", sans-serif;
  }
`;

const ListaUm = styled.ul`
  widht: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

const Icone = styled.img`
  widht: 20vw;
  height: 3.5vh;
`;

const CaixaDoInput = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  align-items: center;
`;

const ListaDois = styled.ul`
  widht: 60%;
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
      <CaixaDoInput>
        <input />
        <img src={Pesquisa} alt="pesquisa" />
      </CaixaDoInput>
      <ListaDois>
        <li>Filtro</li>
        <li>Login</li>
      </ListaDois>
    </Conteiner>
  );
}
