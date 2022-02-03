import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-image: linear-gradient(90deg, #fffd00, #ffd100);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super Oferta! Frete grátis para produtos acima de R$200,00.
    </Container>
  );
};

export default Announcement;
