import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  color: black;
`;
export const FiltroGenero = styled.div`
  background-color: #861040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;

  h2,
  p {
    color: white;
  }
`;

export const ListaGenero = styled.ul`
  list-style-type: none;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }

  li span {
    padding: 10px;
    background-color: white;
    border-radius: 5px;
  }
`;

export const ListaFilmes = styled.ul`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    padding: 30px;
    display: inline-block;
    width: 300px;
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
