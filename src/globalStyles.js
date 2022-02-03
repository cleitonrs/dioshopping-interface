import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-image: linear-gradient(90deg, #fffd00, #ffd100);
  }
`

export const Container = styled.div`
    height: 60px;
    margin-bottom: 50px;
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: #202020;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`

export const Logo = styled.div`
    font-size: 42px;
    font-weight: 500;
    background-image: linear-gradient(90deg, #3A8BC9, #E94D5F);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Home = styled.div`
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

export const Contato = styled.div`
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

export default GlobalStyle