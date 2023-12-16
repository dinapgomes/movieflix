import styled from "styled-components";

export const ListaRecomendacao = styled.ul`
  display: flex;
  overflow-x: auto;
  width: 100vw;
  padding: 0;

  li {
    padding: 15px;
    display: inline-block;
    width: 300px;
    margin: 15px;
  }

  li img {
    width: 100%;
  }

  .titulo-filme {
    color: black;
  }
  .data-lacamento {
    color: #646464;
  }
`;
