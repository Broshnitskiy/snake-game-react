import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  h1 {
    font-size: 42px;
    margin-bottom: 16px;
  }
  button {
    display: block;
    width: 100px;
    height: 50px;
    margin: 40px auto;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 44px;
  display: flex;
  justify-content: space-evenly;

  div {
    text-align: left;
    margin-right: 24px;
    font-size: 24px;

    p {
      font-size: 32px;
      margin-bottom: 24px;
    }
  }
`;

export const GameArea = styled.div`
  position: relative;

  width: 600px;
  height: 600px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 10px #abbfc0;
  background-color: #fff;
`;
