import styled from "styled-components";

export const CardActor = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  padding: 15px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  padding: 2px 16px;
`;

export const CardTitle = styled.h2`
  /* font-size: 15px; */
`;

export const CardSubTitle = styled.p`
  /* font-size: 15px; */
`;
